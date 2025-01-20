import { User } from '@/types/user';
import { RevenueTypePieChart } from '../RevenueTypePieChart';
import { LastWeekPurchasesChart } from '../LastWeekPurchasesChart';
import { UserTableActions } from '../UserTableActions';

export function RevenueTypeCellRenderer({ data }: { data: User }) {
  return <RevenueTypePieChart data={data.revenueTypes} width={50} height={50} />;
}

export function LastWeekPurchasesCellRenderer({ data }: { data: User }) {
  return <LastWeekPurchasesChart data={data.lastWeekPurchases} />;
}

export function UserActionsCellRenderer({ data }: { data: User }) {
  return <UserTableActions user={data} />;
}
