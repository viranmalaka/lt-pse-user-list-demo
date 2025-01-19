/**
 * this file is referred from https://airbnb.io/visx/pies
 */

import React from 'react';
import Pie from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { User } from '@/types/user';
import { AnimatedPie } from '@/components/common/AnimatedPie';

// accessor functions
const value = (d: User['revenueTypes'][0]) => d.amount;

const defaultMargin = { top: 5, right: 5, bottom: 5, left: 5 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
  data: User['revenueTypes'];
};

export function RevenueTypePieChart({ width, height, margin = defaultMargin, animate = true, data }: PieProps) {
  if (width < 10) return null;

  // color scales
  const getColor = scaleOrdinal({
    domain: data.map((d) => d.type),
    range: ['rgba(93,30,91,1)', 'rgba(93,30,91,0.8)', 'rgba(93,30,91,0.6)'],
  });

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;

  return (
    <svg width={width} height={height}>
      <Group top={innerHeight / 2 + margin.top} left={innerWidth / 2 + margin.left}>
        <Pie
          data={data}
          pieValue={value}
          outerRadius={radius}
          innerRadius={radius - 15}
          cornerRadius={1}
          padAngle={0.005}
        >
          {(pie) => (
            <AnimatedPie<User['revenueTypes'][0]>
              {...pie}
              animate={animate}
              getKey={(arc) => arc.data.type}
              getColor={(arc) => getColor(arc.data.type)}
              onClickDatum={() => {}}
            />
          )}
        </Pie>
      </Group>
    </svg>
  );
}
