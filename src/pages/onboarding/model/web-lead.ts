/**
 * Somebody who bought on the web funnel (walkito.site/go) and signed in with
 * "Already have an account?" on the first screen. The app never reads her
 * funnel answers: she goes through its own questions and the plan is built
 * from those. One thing the funnel knows has to reach the plan all the same:
 * an ad that promised a seated start.
 *
 * Meta Ad 1 says "No standing", and the funnel hides the standing start for
 * it (`SEATED_ADS` in funnel/src/screens/quiz.tsx); here it gives her
 * `seatedStart`. Only ever turned on: a seated answer from the app's own
 * questions is never undone by this, and nothing else in her plan is read
 * from the web.
 */
export const SEATED_ADS: readonly string[] = ['ad1_plancard'];

/** Whether `web_leads.utm`, as stored by the funnel, came from a seated ad. */
export function seatedFromWebLead(utm: unknown): boolean {
  if (utm == null || typeof utm !== 'object') return false;
  const content = (utm as Record<string, unknown>).utm_content;
  return typeof content === 'string' && SEATED_ADS.includes(content);
}

/**
 * Her own `web_leads` row, by its "read own web lead" policy, and nothing
 * else of it but the utm. False for anybody without a row (an app install,
 * an anonymous session), offline, or on any error: this must never hold the
 * onboarding up, so callers do not wait on it.
 *
 * The client is required here rather than imported, which keeps React Native
 * out of what the unit test loads.
 */
export async function webLeadSeated(): Promise<boolean> {
  try {
    const { supabase } = require('@/shared/lib/supabase') as typeof import('@/shared/lib/supabase');
    if (supabase == null) return false;
    const { data, error } = await supabase.from('web_leads').select('utm').maybeSingle();
    if (error != null || data == null) return false;
    return seatedFromWebLead((data as { utm?: unknown }).utm);
  } catch {
    return false;
  }
}
