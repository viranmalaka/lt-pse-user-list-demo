import { useAppSelector } from '@/lib/store/store';
import { WidgetWrapper } from './WidgetWrapper';
import { Spinner } from '../ui/spinner';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { getArrayFromObject } from '@/lib/utils';
import { RevenuePieChartColors } from '@/lib/constants';

export function UserRevenueTypes() {
  const users = useAppSelector((state) => state.user.users);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  const cumulativeRevenue = users.reduce(
    (acc, user) => {
      const revenueMap = user.revenueTypes.reduce(
        (acc, revenue) => {
          acc[revenue.type as 'subscription' | 'purchase' | 'ad'] = revenue.amount;
          return acc;
        },
        {} as { subscription: number; ad: number; purchase: number },
      );
      return {
        subscription: acc.subscription + revenueMap.subscription,
        ad: acc.ad + revenueMap.ad,
        purchase: acc.purchase + revenueMap.purchase,
      };
    },
    { subscription: 0, ad: 0, purchase: 0 },
  );

  const data = getArrayFromObject(cumulativeRevenue, 'type', 'value');

  return (
    <WidgetWrapper title="User Revenue Types" description="Revenue types for all users">
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <Spinner>Loading...</Spinner>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={RevenuePieChartColors[entry.type as keyof typeof RevenuePieChartColors]}
                />
              ))}
              <Tooltip />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </WidgetWrapper>
  );
}
