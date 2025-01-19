'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { RevenueTypePieChart } from './RevenueTypePieChart';
import { LastWeekPurchasesChart } from './LastWeekPurchasesChart';
import { selectFilteredUsers, setEditingUser } from '@/lib/store/user-store';
import { Button } from '@/components/ui/button';
import { User } from '@/types/user';
import { setUserFormDrawer } from '@/lib/store/ui-store';
import { DeleteUser } from './DeleteUser';

export function UserTable() {
  const users = useAppSelector(selectFilteredUsers);
  const dispatch = useAppDispatch();

  const handleEdit = (user: User) => {
    dispatch(setEditingUser(user));
    dispatch(setUserFormDrawer('edit'));
  };

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
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(user)}>
                    Edit
                  </Button>
                  <DeleteUser user={user} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
