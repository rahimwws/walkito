/*
 * walkito.site without React: the interactive parts of the shared components,
 * in plain JavaScript, for pages served without Next's runtime
 * (scripts/strip-js.mjs). Each block mirrors one React component; the markup
 * is still rendered by that component at build time, so class names and data
 * attributes here are a contract with it:
 *
 *   AiReferral, ScrollState, MobileMenu, LangPicker, GetApp (button + dialog),
 *   BackToTop, InView, ScrollProgress, ExerciseMedia, EmailSignup,
 *   FeatureScroller.
 *
 * Tested by scripts/test-site-js.mjs. Pages that still hydrate React never
 * load this file, so nothing runs twice.
 */
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;
  var $$ = function (sel, el) {
    return Array.prototype.slice.call((el || doc).querySelectorAll(sel));
  };
  var reduceMotion = function () {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  /* AiReferral: tag App Store links with the AI assistant the visit came from. */
  (function () {
    var sources = [
      [/(^|\.)chatgpt\.com$|(^|\.)openai\.com$/, 'ai-chatgpt'],
      [/(^|\.)perplexity\.ai$/, 'ai-perplexity'],
      [/(^|\.)copilot\.microsoft\.com$|^copilot\.cloud\.microsoft$/, 'ai-copilot'],
      [/(^|\.)gemini\.google\.com$|^bard\.google\.com$/, 'ai-gemini'],
      [/(^|\.)claude\.ai$/, 'ai-claude'],
    ];
    var utm = new URLSearchParams(location.search).get('utm_source') || '';
    var host = '';
    try {
      host = doc.referrer ? new URL(doc.referrer).hostname : '';
    } catch (e) {
      host = '';
    }
    var ct = null;
    for (var i = 0; i < sources.length; i++) {
      if (sources[i][0].test(host) || sources[i][0].test(utm)) {
        ct = sources[i][1];
        break;
      }
    }
    if (!ct) return;
    // For links added later (the calculator copies its App Store badge in).
    root.dataset.aiCt = ct;
    $$('a[href*="apps.apple.com"][href*="ct="]').forEach(function (a) {
      var url = new URL(a.href);
      url.searchParams.set('ct', ct);
      a.href = url.toString();
    });
  })();

  /* ScrollState: the floating header turns into a capsule once scrolled. */
  (function () {
    var header = doc.querySelector('.masthead-float');
    if (!header) return;
    var frame = 0;
    var measure = function () {
      if ('scrolled' in root.dataset) return;
      root.style.setProperty('--head-h', header.offsetHeight + 'px');
      var brand = header.querySelector('.brand');
      var logo = header.querySelector('.brand img');
      var nav = header.querySelector('.nav');
      var button = header.querySelector('.download');
      if (!brand || !logo || !nav || !button) return;
      var b = brand.getBoundingClientRect();
      var n = nav.getBoundingClientRect();
      var d = button.getBoundingClientRect();
      root.style.setProperty('--brand-x', Math.round(n.left - 8 - (b.left + logo.offsetWidth)) + 'px');
      root.style.setProperty('--button-x', Math.round(n.right + 8 - d.left) + 'px');
    };
    var update = function () {
      frame = 0;
      if (window.scrollY > 24) root.dataset.scrolled = '';
      else delete root.dataset.scrolled;
    };
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(header);
    measure();
    update();
    window.addEventListener(
      'scroll',
      function () {
        if (!frame) frame = requestAnimationFrame(update);
      },
      { passive: true },
    );
  })();

  /* MobileMenu: the burger opens the panel; Escape or a tap outside closes it. */
  $$('.menu-toggle').forEach(function (button) {
    var panel = doc.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;
    var set = function (open) {
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      button.setAttribute('aria-label', open ? button.dataset.labelClose : button.dataset.labelOpen);
      panel.hidden = !open;
      if (open) panel.dataset.open = '';
      else delete panel.dataset.open;
    };
    var isOpen = function () {
      return button.getAttribute('aria-expanded') === 'true';
    };
    button.addEventListener('click', function () {
      set(!isOpen());
    });
    doc.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        set(false);
        button.focus();
      }
    });
    doc.addEventListener('pointerdown', function (event) {
      if (isOpen() && !panel.contains(event.target) && !button.contains(event.target)) set(false);
    });
    $$('nav a', panel).forEach(function (a) {
      a.addEventListener('click', function () {
        set(false);
      });
    });
  });

  /* LangPicker: a <details> menu. The one in the header (lp-down) links each
     language to this page's own translation, read from the hreflang links. */
  (function () {
    var pickers = $$('details.lp');
    if (!pickers.length) return;
    var alternates = {};
    $$('link[rel="alternate"][hreflang]').forEach(function (link) {
      var url = new URL(link.href, location.href);
      if (url.origin === location.origin) alternates[link.hreflang] = url.pathname;
    });
    pickers.forEach(function (el) {
      if (el.classList.contains('lp-down')) {
        $$('a.lp-item[hreflang]', el).forEach(function (a) {
          var path = alternates[a.getAttribute('hreflang')];
          if (path) a.setAttribute('href', path);
        });
      }
      doc.addEventListener('pointerdown', function (event) {
        if (el.open && !el.contains(event.target)) el.open = false;
      });
      doc.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && el.open) {
          el.open = false;
          var summary = el.querySelector('summary');
          if (summary) summary.focus();
        }
      });
    });
  })();

  /* GetApp: iPhone follows the App Store link, Android goes to Google Play,
     anything else (a computer) opens the QR dialog. */
  (function () {
    var platform = function () {
      var ua = navigator.userAgent;
      if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
      if (/Android/.test(ua)) return 'android';
      return 'other';
    };
    $$('a[data-get-app]').forEach(function (a) {
      a.addEventListener('click', function (event) {
        var p = platform();
        if (p === 'ios') return;
        if (p === 'android' && a.dataset.android) {
          event.preventDefault();
          location.href = a.dataset.android;
          return;
        }
        var dialog = doc.getElementById('get-app');
        if (dialog && typeof dialog.showModal === 'function') {
          event.preventDefault();
          dialog.showModal();
        }
      });
    });
    var dialog = doc.getElementById('get-app');
    if (dialog) {
      dialog.addEventListener('click', function (event) {
        if (event.target === dialog) dialog.close();
      });
    }
  })();

  /* BackToTop: smooth scroll, then focus the logo. */
  $$('a[data-back-to-top]').forEach(function (a) {
    a.addEventListener('click', function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion() ? 'instant' : 'smooth' });
      var brand = doc.querySelector('.brand');
      if (brand) brand.focus({ preventScroll: true });
    });
  });

  /* InView: a section knows when it is on screen (data-seen once, data-live
     while visible); data-js tells the CSS that this is running. */
  $$('[data-inview]').forEach(function (el) {
    if (!('IntersectionObserver' in window)) return;
    el.dataset.js = '';
    new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          el.dataset.seen = '';
          el.dataset.live = '';
        } else {
          delete el.dataset.live;
        }
      },
      { threshold: 0.18 },
    ).observe(el);
  });

  /* ScrollProgress: --p goes 0 -> 1 while the section scrolls past. */
  $$('[data-scroll-progress]').forEach(function (el) {
    if (reduceMotion() || !('IntersectionObserver' in window)) return;
    var frame = 0;
    var near = false;
    var update = function () {
      frame = 0;
      var rect = el.getBoundingClientRect();
      var travel = rect.height - window.innerHeight;
      var p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 1;
      el.style.setProperty('--p', p.toFixed(4));
    };
    var onScroll = function () {
      if (near && !frame) frame = requestAnimationFrame(update);
    };
    new IntersectionObserver(
      function (entries) {
        near = entries[0].isIntersecting;
        if (near) onScroll();
      },
      { rootMargin: '200px 0px' },
    ).observe(el);
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  });

  /* ExerciseMedia: the app's clip starts playing over the still once the
     figure is near the screen. */
  $$('figure[data-exercise]').forEach(function (figure) {
    if (reduceMotion()) return;
    var id = figure.dataset.exercise;
    var frame = figure.querySelector('.exercise-media-frame');
    if (!frame) return;
    var play = function () {
      var still = '/exercises/' + id + '.webp';
      var video = doc.createElement('video');
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'none';
      video.poster = still;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('aria-hidden', 'true');
      [['webm', 'video/webm'], ['mp4', 'video/mp4']].forEach(function (s) {
        var source = doc.createElement('source');
        source.src = '/exercises/' + id + '.' + s[0];
        source.type = s[1];
        video.appendChild(source);
      });
      frame.appendChild(video);
      var started = video.play();
      if (started && started.catch) started.catch(function () {});
    };
    if (!('IntersectionObserver' in window)) return play();
    var io = new IntersectionObserver(
      function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          io.disconnect();
          play();
        }
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(figure);
  });

  /* EmailSignup: posts to the subscribe endpoint and shows the answer. */
  $$('[data-email-signup]').forEach(function (box) {
    var form = box.querySelector('form');
    if (!form) return;
    var copy = JSON.parse(box.dataset.copy || '{}');
    var fields = $$('input[name="email"], button[type="submit"]', form);
    var clearError = function () {
      $$('.email-signup-error', form).forEach(function (p) {
        p.remove();
      });
    };
    var showError = function (text, withEmail) {
      clearError();
      var p = doc.createElement('p');
      p.className = 'email-signup-error';
      p.textContent = text;
      if (withEmail) {
        var a = doc.createElement('a');
        a.href = 'mailto:' + box.dataset.support;
        a.textContent = box.dataset.support;
        p.appendChild(a);
      }
      form.appendChild(p);
    };
    var done = function (text) {
      box.className = 'email-signup email-signup-done';
      box.textContent = '';
      var p = doc.createElement('p');
      p.textContent = text;
      box.appendChild(p);
    };
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var email = String(data.get('email') || '').trim();
      var website = String(data.get('website') || '').trim();
      if (!email) return;
      fields.forEach(function (f) {
        f.disabled = true;
      });
      clearError();
      var enable = function () {
        fields.forEach(function (f) {
          f.disabled = false;
        });
      };
      fetch(box.dataset.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          locale: box.dataset.lang,
          source: box.dataset.source,
          page: box.dataset.page,
          website: website,
        }),
      })
        .then(function (res) {
          return res.json().then(function (body) {
            return { status: res.status, body: body };
          });
        })
        .then(function (r) {
          if (r.status === 429) {
            enable();
            showError(copy.tooMany, false);
          } else if (r.body && r.body.ok) {
            done(r.body.already ? copy.already : copy.success);
          } else {
            enable();
            showError(copy.error, true);
          }
        })
        .catch(function () {
          enable();
          showError(copy.error, true);
        });
    });
  });

  /* FeatureScroller (home): a pinned stage whose screenshot and title follow
     the scroll; the list buttons jump to a feature. */
  $$('section.feat-scroll').forEach(function (el) {
    var stage = el.querySelector('.feat-stage');
    var list = el.querySelector('.feat-items');
    var current = el.querySelector('.feat-current');
    var buttons = $$('.feat-item', el);
    var n = buttons.length;
    if (!stage || !list || !current || !n) return;
    var card = el.querySelector('.feat-shot-card');
    var parts = [];
    var k = -1;
    Array.prototype.forEach.call(card ? card.children : [], function (child) {
      if (!child.classList.contains('feat-extras')) k++;
      parts.push([child, k]);
    });
    var pinned = true;
    var active = 0;
    var lastSub = -1;
    var lastLive = null;
    var frame = 0;
    var setActive = function (a) {
      if (a === active) return;
      active = a;
      parts.forEach(function (p) {
        var on = p[1] === a;
        p[0].toggleAttribute('data-on', on);
        p[0].toggleAttribute('data-past', p[1] < a);
        p[0].setAttribute('aria-hidden', on && !p[0].classList.contains('feat-extras') ? 'false' : 'true');
      });
      buttons.forEach(function (b, i) {
        b.setAttribute('aria-pressed', i === a ? 'true' : 'false');
        b.toggleAttribute('data-on', i === a);
      });
      var b = buttons[a];
      var name = b.querySelector('.feat-name');
      current.textContent = '';
      var tag = doc.createElement('span');
      tag.className = 'feat-tag';
      tag.textContent = name ? name.textContent : '';
      var title = doc.createElement('h3');
      title.className = 'feat-title';
      title.textContent = b.dataset.title || '';
      current.appendChild(tag);
      current.appendChild(title);
    };
    var readPin = function () {
      pinned = getComputedStyle(stage).position === 'sticky';
    };
    var update = function () {
      frame = 0;
      var rect = el.getBoundingClientRect();
      var live = rect.bottom > 0 && rect.top < window.innerHeight;
      if (live !== lastLive) {
        lastLive = live;
        el.toggleAttribute('data-live', live);
      }
      if (!pinned) return;
      var travel = rect.height - window.innerHeight;
      var p = travel > 0 ? Math.min(0.9999, Math.max(0, -rect.top / travel)) : 0;
      var a = Math.min(n - 1, Math.floor(p * n));
      var sub = Math.round((p * n - a) * 200) / 200;
      if (sub !== lastSub) {
        lastSub = sub;
        list.style.setProperty('--sub', String(sub));
      }
      setActive(a);
    };
    var onScroll = function () {
      if (!frame) frame = requestAnimationFrame(update);
    };
    buttons.forEach(function (b, i) {
      b.addEventListener('click', function () {
        if (!pinned) return setActive(i);
        var travel = el.offsetHeight - window.innerHeight;
        var top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top + travel * ((i + 0.08) / n), behavior: reduceMotion() ? 'instant' : 'smooth' });
      });
    });
    readPin();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () {
      readPin();
      onScroll();
    });
  });
})();
