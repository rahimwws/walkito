// App Store screenshots only (`EXPO_PUBLIC_STORE_SHOTS=1`, development builds):
// the whole app believes it is Friday 23 October 2026, 7:12 in the morning, so
// every screen is drawn on the same day of the same seeded user
// (`src/app/providers/store-shots.ts`). Imported first by `index.js`, before any
// store reads the time at module load. Folds away in a release bundle.
if (__DEV__ && process.env.EXPO_PUBLIC_STORE_SHOTS === '1') {
  const RealDate = Date;
  const offset = new RealDate(2026, 9, 23, 7, 12, 0).getTime() - RealDate.now();
  class ShiftedDate extends RealDate {
    constructor(...args) {
      if (args.length === 0) super(RealDate.now() + offset);
      else super(...args);
    }
    static now() {
      return RealDate.now() + offset;
    }
  }
  globalThis.Date = ShiftedDate;
}
