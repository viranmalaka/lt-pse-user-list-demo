'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppSelector } from '@/lib/store/store';
import { RevenueTypePieChart } from './RevenueTypePieChart';
import { LastWeekPurchasesChart } from './LastWeekPurchasesChart';
import { selectFilteredUsers } from '@/lib/store/user-store';
import { UserTableActions } from './UserTableActions';
import { Spinner } from '@/components/ui/spinner';

export function UserTable() {
  const users = useAppSelector(selectFilteredUsers);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner>Loading...</Spinner>
      </div>
    );
  }

  return (
    <>
      <Table>
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
