import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

/**
 * The site's hero (walkito.site, `site/components/Home.tsx`), drawn natively
 * for the second paywall step: the icon's blue sky and the phone with Home on
 * it, nothing else. The step's copy sits over its lower part as a sheet, so
 * this only has to fill the band above.
 *
 * Fixed colours, the site's and the icon's, in both appearances: it is a
 * picture of the app, not a screen of it.
 */

const PHONE = require('@assets/offer/phone-home.webp');
const PHONE_RATIO = 1550 / 751;
const ICON = require('@assets/icon-small.webp');

/** The site's band, top to bottom (globals.css, `.hero-stage`). */
const SKY = 'linear-gradient(180deg, #0234FD 0%, #0B52FF 16%, #3D8BFF 34%, #A9C8FF 54%, #E4DDFF 74%, #ECE4FF 100%)';
const CYAN = 'radial-gradient(circle closest-side, rgba(24,216,253,0.75) 0%, rgba(24,216,253,0) 100%)';
const PINK = 'radial-gradient(circle closest-side, rgba(240,191,253,0.7) 0%, rgba(240,191,253,0) 100%)';
const LILAC = 'radial-gradient(circle closest-side, rgba(182,133,253,0.55) 0%, rgba(182,133,253,0) 100%)';
const STREAK = 'radial-gradient(closest-side, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)';
const ARCH = 'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.04) 60%)';

/**
 * @param top where the phone starts, under the step bar.
 * @param covered how much of the band's foot the sheet lies over.
 */
export function OfferHero({ top, covered }: { top: number; covered: number }) {
  const [box, setBox] = useState({ width: 0, height: 0 });
  const { width: w, height: h } = box;

  // The band the phone may use, above the sheet.
  const visible = Math.max(0, h - covered - top);
  // The phone shows about its top 55% above the sheet: large enough to read.
  const phoneW = Math.min(w * 0.74, Math.max(170, (visible + 24) / (PHONE_RATIO * 0.55)));
  const phoneH = phoneW * PHONE_RATIO;
  const phoneLeft = (w - phoneW) / 2;

  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[StyleSheet.absoluteFill, { experimental_backgroundImage: SKY }]}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setBox({ width: Math.round(width), height: Math.round(height) });
      }}>
      {w > 0 && covered > 0 && (
        <>
          <View
            style={[
              styles.blob,
              { width: w * 0.95, height: w * 0.95, top: -w * 0.3, right: -w * 0.3, experimental_backgroundImage: CYAN },
            ]}
          />
          <View
            style={[
              styles.blob,
              {
                width: w * 0.85,
                height: w * 0.75,
                top: top + visible * 0.35,
                left: -w * 0.35,
                experimental_backgroundImage: PINK,
              },
            ]}
          />
          <View
            style={[
              styles.blob,
              {
                width: w * 0.75,
                height: w * 0.65,
                top: top + visible * 0.5,
                right: -w * 0.3,
                experimental_backgroundImage: LILAC,
              },
            ]}
          />
          <View
            style={[
              styles.streak,
              { width: w * 1.1, top: top + visible * 0.05, left: w * 0.1, transform: [{ rotate: '-24deg' }] },
            ]}
          />
          <View
            style={[
              styles.streak,
              { width: w, top: top + visible * 0.3, left: -w * 0.4, opacity: 0.6, transform: [{ rotate: '-32deg' }] },
            ]}
          />

          {/* The glass arch the phone stands in. */}
          <View
            style={[
              styles.arch,
              {
                left: w * 0.03,
                right: w * 0.03,
                top: top + visible * 0.34,
                borderTopLeftRadius: w * 0.3,
                borderTopRightRadius: w * 0.3,
              },
            ]}
          />

          <View style={[styles.phone, { top, left: phoneLeft, width: phoneW, height: phoneH }]}>
            <Image source={PHONE} style={styles.fill} resizeMode="contain" />
            <Island width={phoneW} />
          </View>
        </>
      )}
    </View>
  );
}

/** Our Dynamic Island over the mockup's own: the icon, the name, a ring. */
function Island({ width }: { width: number }) {
  const t = useT();
  const unit = width / 100;
  const ring = unit * 4.6;
  return (
    <View
      style={[
        styles.island,
        {
          top: unit * 5.6,
          height: unit * 10.4,
          minWidth: unit * 34,
          paddingLeft: unit * 1.4,
          paddingRight: unit * 1.8,
          gap: unit * 1.8,
        },
      ]}>
      <Image source={ICON} style={{ width: unit * 6, height: unit * 6, borderRadius: unit * 3 }} />
      <Text style={[fonts.bold(Math.max(8, unit * 3.7)), styles.islandName]} numberOfLines={1}>
        {t('onboarding.notify.bannerApp')}
      </Text>
      <Svg width={ring} height={ring} viewBox="0 0 20 20">
        <Circle cx={10} cy={10} r={8} stroke="rgba(255,255,255,0.18)" strokeWidth={3} fill="none" />
        <Circle
          cx={10}
          cy={10}
          r={8}
          stroke="#18D8FD"
          strokeWidth={3}
          fill="none"
          strokeDasharray={`${2 * Math.PI * 8 * 0.68} ${2 * Math.PI * 8}`}
          strokeLinecap="round"
          transform="rotate(-90 10 10)"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { width: '100%', height: '100%' },
  blob: { position: 'absolute' },
  streak: { position: 'absolute', height: 120, experimental_backgroundImage: STREAK },
  arch: { position: 'absolute', bottom: 0, experimental_backgroundImage: ARCH },
  phone: { position: 'absolute' },
  island: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#000000',
  },
  islandName: { flex: 1, color: '#FFFFFF' },
});
