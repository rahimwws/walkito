import { StyleSheet, View } from 'react-native';

/**
 * What covers Home while the first-run flow is over it, the same for the
 * "Day 1" card and the tour's panes so the two read as one surface handing
 * over: a plain dim, no blur, on both platforms.
 */
const DIM = 'rgba(6,6,10,0.62)';

/** The dim alone, for what is drawn in it rather than over it: the corners
 * the tour fills between its square hole and its rounded ring. */
export function shadeDim(): string {
  return DIM;
}

export function Shade() {
  return <View style={[StyleSheet.absoluteFill, { backgroundColor: DIM }]} />;
}
