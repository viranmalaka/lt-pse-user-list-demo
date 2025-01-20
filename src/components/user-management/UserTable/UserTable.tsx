'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppSelector } from '@/lib/store/store';
import { RevenueTypePieChart } from './RevenueTypePieChart';
import { LastWeekPurchasesChart } from './LastWeekPurchasesChart';
import { selectFilteredUsers } from '@/lib/store/user-store';
import { UserTableActions } from './UserTableActions';

export function UserTable() {
  const users = useAppSelector(selectFilteredUsers);

  return (
    <>
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <RevenueTypePieChart data={user.revenueTypes} width={50} height={50} />
              </TableCell>
              <TableCell>
                <LastWeekPurchasesChart data={user.lastWeekPurchases} />
              </TableCell>
              <TableCell>
                <UserTableActions user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
