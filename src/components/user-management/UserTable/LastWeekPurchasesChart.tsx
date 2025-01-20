/**
 * this file is referred from https://airbnb.io/visx/bars
 */

import React, { useMemo } from 'react';
import { Group } from '@visx/group';
import { GradientTealBlue } from '@visx/gradient';
import { scaleBand, scaleLinear } from '@visx/scale';
import { User } from '@/types/user';
import { Bar } from '@visx/shape';

const verticalMargin = 20;

// accessors
const getLetter = (d: User['lastWeekPurchases'][0]) => d.date.toLocaleString();
const getLetterFrequency = (d: User['lastWeekPurchases'][0]) => Number(d.amount);

export type LastWeekPurchasesChartProps = {
  width?: number;
  height?: number;
  data: User['lastWeekPurchases'];
};

export function LastWeekPurchasesChart({ width = 100, height = 50, data }: LastWeekPurchasesChartProps) {
  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: 0.4,
      }),
    [xMax, data],
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax, data],
  );

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <GradientTealBlue id="teal" />
      <rect width={width} height={height} fill="url(#teal)" rx={4} />
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;

          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="rgba(23, 233, 217, .5)"
            />
          );
        })}
      </Group>
    </svg>
  );
}
