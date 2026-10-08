import { useState } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, Line, LinearGradient, Path, Stop } from 'react-native-svg';

import { meterColors, palette, type Accent } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { sparkPoints } from '../model/progress-data';

const HEIGHT = 30;
const PAD = 5;

/**
 * Every test so far, as one small line in the test's accent, the latest a
 * filled dot. One test is a dot on a dashed line; none is the dashed line
 * alone — the row keeps its shape before there is anything to draw.
 */
export function Sparkline({ values, accent, id }: { values: readonly number[]; accent: Accent; id: string }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const card = palette[scheme].card;
  const [width, setWidth] = useState(0);

  const points = sparkPoints(values, width, HEIGHT, PAD);
  const single = values.length === 1;
  const last = single ? { x: width - PAD, y: HEIGHT / 2 } : points[points.length - 1];

  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const area =
    points.length > 1
      ? `${line} L${points[points.length - 1].x.toFixed(1)},${HEIGHT} L${points[0].x.toFixed(1)},${HEIGHT} Z`
      : '';
  const gradient = `spark-${id}`;

  return (
    <View
      style={{ height: HEIGHT }}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      {width > 0 && (
        <Svg width={width} height={HEIGHT}>
          <Defs>
            <LinearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={accent.fill} stopOpacity={0.22} />
              <Stop offset="1" stopColor={accent.fill} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          {values.length < 2 && (
            <Line
              x1={PAD}
              x2={width - PAD}
              y1={HEIGHT / 2}
              y2={HEIGHT / 2}
              stroke={meter.track}
              strokeWidth={2}
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
          )}
          {area.length > 0 && <Path d={area} fill={`url(#${gradient})`} />}
          {points.length > 1 && (
            <Path d={line} stroke={accent.fill} strokeWidth={2.25} fill="none" strokeLinejoin="round" strokeLinecap="round" />
          )}
          {values.length > 0 && last != null && (
            <Circle cx={last.x} cy={last.y} r={4} fill={accent.fill} stroke={card} strokeWidth={2} />
          )}
        </Svg>
      )}
    </View>
  );
}
