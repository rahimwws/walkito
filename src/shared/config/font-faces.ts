/** SF Pro Rounded — iOS (and anything that is not Android). See `fonts.ts`. */
export const faces = {
  regular: 'SFProRounded-Regular',
  medium: 'SFProRounded-Medium',
  semibold: 'SFProRounded-Semibold',
  bold: 'SFProRounded-Bold',
  heavy: 'SFProRounded-Heavy',
} as const;

export const faceAssets = {
  [faces.regular]: require('@assets/fonts/SF-Pro-Rounded-Regular.otf'),
  [faces.medium]: require('@assets/fonts/SF-Pro-Rounded-Medium.otf'),
  [faces.semibold]: require('@assets/fonts/SF-Pro-Rounded-Semibold.otf'),
  [faces.bold]: require('@assets/fonts/SF-Pro-Rounded-Bold.otf'),
  [faces.heavy]: require('@assets/fonts/SF-Pro-Rounded-Heavy.otf'),
};
