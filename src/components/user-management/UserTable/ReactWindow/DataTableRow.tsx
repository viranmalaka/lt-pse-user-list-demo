import { User } from '@/types/user';
import { TableCell, TableRow } from '@/components/ui/table';
import { getRowStyle } from './utils';
import { LastWeekPurchasesCellRenderer, RevenueTypeCellRenderer } from '../CellRenderers';

type UserTableActionsProps = {
  index: number;
  style: React.CSSProperties;
  user: User;
  isMobile: boolean;
};

export function DataTableRow({ style, user, isMobile }: UserTableActionsProps) {
  return (
    <TableRow key={user.id} style={style} className="flex dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
      <TableCell style={getRowStyle(isMobile ? 9 : 6)} className="py-4">
        {user.firstName} {user.lastName}
      </TableCell>
      <TableCell style={getRowStyle(isMobile ? 9 : 6)} className="py-4">
        {user.email}
      </TableCell>
      <TableCell style={getRowStyle(2)} className="py-4">
        {user.age}
      </TableCell>
      {!isMobile && (
        <>
          <TableCell style={getRowStyle(2)} className="hidden py-0 sm:table-cell">
            <RevenueTypeCellRenderer data={user} />
          </TableCell>
          <TableCell style={getRowStyle(4)} className="hidden py-0.5 sm:table-cell">
            <LastWeekPurchasesCellRenderer data={user} />
          </TableCell>
        </>
      )}
    </TableRow>
  );
}
