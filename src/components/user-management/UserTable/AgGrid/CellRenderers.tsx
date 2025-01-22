import { User } from '@/types/user';
import { UserTableActions } from '../UserTableActions';
import { Bar, BarChart, Cell, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RevenuePieChartColors } from '@/lib/constants';

export function RevenueTypeCellRenderer({ data }: { data: User }) {
  const revenueTypes = data.revenueTypes;

  return (
    <PieChart width={50} height={50}>
      <Pie data={revenueTypes} cx="50%" cy="50%" labelLine={false} outerRadius={10} fill="#8884d8" dataKey="amount">
        {revenueTypes.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={RevenuePieChartColors[entry.type as keyof typeof RevenuePieChartColors]} />
        ))}
        <Tooltip />
      </Pie>
    </PieChart>
  );
}

export function LastWeekPurchasesCellRenderer({ data }: { data: User }) {
  return (
    <BarChart data={data.lastWeekPurchases} width={100} height={50}>
      <XAxis dataKey="date" hide />
      <YAxis hide />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
}

export function UserActionsCellRenderer({ data }: { data: User }) {
  return <UserTableActions user={data} />;
}
