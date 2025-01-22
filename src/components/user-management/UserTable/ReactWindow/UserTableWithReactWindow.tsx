'use client';

import { FixedSizeList as List } from 'react-window';
import AutoSizer, { Size } from 'react-virtualized-auto-sizer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppSelector } from '@/lib/store/store';
import { selectFilteredUsers } from '@/lib/store/user-store';
import { User } from '@/types/user';
import { RevenueTypePieChart } from '../RevenueTypePieChart';
import { LastWeekPurchasesChart } from '../LastWeekPurchasesChart';
import { UserTableActions } from '../UserTableActions';

const getRowStyle = (flex: number) => {
  return {
    width: `${flex * 5}%`,
    maxWidth: `${flex * 5}%`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
};

const DataTableRow = ({ style, user }: { index: number; style: React.CSSProperties; user: User }) => {
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
};

export function UserTableWithReactWindow() {
  const users = useAppSelector(selectFilteredUsers);

  return (
    <div style={{ height: 'calc(100vh - 200px)' }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={getRowStyle(5)}>Full name</TableHead>
            <TableHead style={getRowStyle(4)}>Email</TableHead>
            <TableHead style={getRowStyle(2)}>Age</TableHead>
            <TableHead style={getRowStyle(2)}>Revenue</TableHead>
            <TableHead style={getRowStyle(4)}>Last Week Purchases</TableHead>
            <TableHead style={getRowStyle(3)}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
      <AutoSizer>
        {({ height, width }: Size) => (
          <List height={height - 50} width={width} itemCount={users.length ?? 0} itemSize={55}>
            {(props) => <DataTableRow user={users[props.index]} {...props} />}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
