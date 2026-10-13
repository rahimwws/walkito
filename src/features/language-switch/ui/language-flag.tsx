import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import type { Language } from '@/shared/lib/i18n';

/**
 * A small flag for a language, in the flag's own shape (3:2) with softened
 * corners: what the onboarding header shows, and what leads each row of the
 * picker.
 *
 * A flag stands for a country, not a language, so each is the country this
 * app's version of the language is written for: the United States for its
 * English, Brazil for its Portuguese (`pt` is Brazilian, see the catalogue).
 *
 * Drawn here rather than taken from emoji: the project uses no emoji, and a
 * flag emoji renders differently on every Android skin. Simplified only where
 * nothing reads at this size: no coat of arms on Spain's, no stars on
 * Brazil's globe.
 */
export function LanguageFlag({ language, width = 26 }: { language: Language; width?: number }) {
  const height = (width * 2) / 3;
  return (
    <View style={[styles.flag, { width, height, borderRadius: Math.max(2, width / 10) }]}>
      <Svg width={width} height={height} viewBox="0 0 30 20">
        {FLAGS[language]}
      </Svg>
    </View>
  );
}

/** Three bands across, top to bottom. */
const across = (top: string, middle: string, bottom: string) => (
  <>
    <Rect x={0} y={0} width={30} height={20 / 3 + 0.05} fill={top} />
    <Rect x={0} y={20 / 3} width={30} height={20 / 3 + 0.05} fill={middle} />
    <Rect x={0} y={40 / 3} width={30} height={20 / 3} fill={bottom} />
  </>
);

/** Three bands down, left to right. */
const down = (left: string, middle: string, right: string) => (
  <>
    <Rect x={0} y={0} width={10.05} height={20} fill={left} />
    <Rect x={10} y={0} width={10.05} height={20} fill={middle} />
    <Rect x={20} y={0} width={10} height={20} fill={right} />
  </>
);

/** Thirteen stripes, the blue canton over the top seven, and its fifty stars
 * in rows of six and five. */
function unitedStates(): ReactNode {
  const stripe = 20 / 13;
  const cantonW = 12;
  const cantonH = stripe * 7;
  const stars: { x: number; y: number }[] = [];
  for (let row = 0; row < 9; row++) {
    const y = (cantonH / 10) * (row + 1);
    const count = row % 2 === 0 ? 6 : 5;
    for (let col = 0; col < count; col++) {
      const x = (cantonW / 12) * (row % 2 === 0 ? 1 + col * 2 : 2 + col * 2);
      stars.push({ x, y });
    }
  }
  return (
    <>
      {Array.from({ length: 13 }, (_, i) => (
        <Rect
          key={i}
          x={0}
          y={i * stripe}
          width={30}
          height={stripe + 0.05}
          fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
        />
      ))}
      <Rect x={0} y={0} width={cantonW} height={cantonH} fill="#3C3B6E" />
      {stars.map((star) => (
        <Circle key={`${star.x}-${star.y}`} cx={star.x} cy={star.y} r={0.4} fill="#FFFFFF" />
      ))}
    </>
  );
}

const FLAGS: Record<Language, ReactNode> = {
  en: unitedStates(),
  ru: across('#FFFFFF', '#0039A6', '#D52B1E'),
  es: (
    <>
      <Rect x={0} y={0} width={30} height={20} fill="#AA151B" />
      <Rect x={0} y={5} width={30} height={10} fill="#F1BF00" />
    </>
  ),
  pt: (
    <>
      <Rect x={0} y={0} width={30} height={20} fill="#009C3B" />
      <Path d="M15 2.2 L27.4 10 L15 17.8 L2.6 10 Z" fill="#FFDF00" />
      <Circle cx={15} cy={10} r={4.6} fill="#002776" />
      <Path d="M10.6 9.1 Q15 7.5 19.4 11.2" stroke="#FFFFFF" strokeWidth={1} fill="none" />
    </>
  ),
  fr: down('#002395', '#FFFFFF', '#ED2939'),
  de: across('#000000', '#DD0000', '#FFCE00'),
  it: down('#009246', '#FFFFFF', '#CE2B37'),
};

const styles = StyleSheet.create({
  flag: { overflow: 'hidden', borderCurve: 'continuous' },
});
