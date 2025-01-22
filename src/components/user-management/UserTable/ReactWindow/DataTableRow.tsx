import { User } from '@/types/user';
import { RevenueTypePieChart } from '../RevenueTypePieChart';
import { LastWeekPurchasesChart } from '../LastWeekPurchasesChart';
import { UserTableActions } from '../UserTableActions';
import { TableCell, TableRow } from '@/components/ui/table';
import { getRowStyle } from './utils';

export function DataTableRow({ style, user }: { index: number; style: React.CSSProperties; user: User }) {
  return (
    <TableRow key={user.id} style={style} className="flex dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
      <TableCell style={getRowStyle(5)} className="py-4">
        {user.firstName} {user.lastName}
      </TableCell>
      <TableCell style={getRowStyle(4)} className="py-4">
        {user.email}
      </TableCell>
      <TableCell style={getRowStyle(2)} className="py-4">
        {user.age}
      </TableCell>
      <TableCell style={getRowStyle(2)} className="py-0">
        <RevenueTypePieChart data={user.revenueTypes} width={50} height={50} />
      </TableCell>
      <TableCell style={getRowStyle(4)} className="py-0.5">
        <LastWeekPurchasesChart data={user.lastWeekPurchases} />
      </TableCell>
      <TableCell style={getRowStyle(3)} className="py-3">
        <UserTableActions user={user} />
      </TableCell>
    </TableRow>
  );
}
