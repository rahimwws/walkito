export type TimePickerProps = {
  /** Minutes past midnight. */
  minutes: number;
  onChange: (minutes: number) => void;
  /** `compact` sits in a row, as in Settings; `wheel` is the whole control, as in onboarding. */
  variant?: 'compact' | 'wheel';
};
