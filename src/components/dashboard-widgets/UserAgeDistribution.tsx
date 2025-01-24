'use client';

import { useAppSelector } from '@/lib/store/store';
import { useMemo } from 'react';
import { generateAgeDistribution, getArrayFromObject } from '@/lib/utils';
import { Spinner } from '../ui/spinner';
import { WidgetWrapper } from './WidgetWrapper';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export function UserAgeDistributionDashboardWidget() {
  const users = useAppSelector((state) => state.user.users);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  // sort the age distribution by age range
  const ageDistribution = useMemo(() => {
    const distribution = getArrayFromObject(generateAgeDistribution(users), 'ages', 'count');
    return distribution.sort((a, b) => {
      const ageRangeA = (a.ages as string).split('-').map(Number);
      const ageRangeB = (b.ages as string).split('-').map(Number);
      return ageRangeA[0] - ageRangeB[0];
    });
  }, [users]);

  return (
    <WidgetWrapper title="User Age Distribution" description="Age distribution of users">
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <Spinner>Loading...</Spinner>
        </div>
      ) : (
        <ResponsiveContainer height={300}>
          <BarChart data={ageDistribution}>
            <XAxis dataKey="ages" />
            <YAxis />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </WidgetWrapper>
  );
}
