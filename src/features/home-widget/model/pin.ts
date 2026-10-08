/**
 * Asks the system to put the widget on the Home Screen.
 *
 * iOS has no such request: a widget is added by the person, from the Home
 * Screen's edit mode, which is why the screen after the first purchase walks
 * through it instead. False here means "show the walkthrough".
 */
export async function requestWidgetPin(): Promise<boolean> {
  return false;
}
