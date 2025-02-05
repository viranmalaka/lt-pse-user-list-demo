'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { setUserFormDrawer } from '@/lib/store/ui-store';
import { UserAddFormWrapper } from '../UserForm/UserAddFormWrapper';
import { UserEditFormWrapper } from '../UserForm/UserEditFormWrapper';
import Link from 'next/link';

export function UserFormDrawer() {
  const userFormDrawerState = useAppSelector((state) => state.ui.userFormDrawer);
  const dispatch = useAppDispatch();

  const onDrawerClose = () => {
    dispatch(setUserFormDrawer(null));
  };

  return (
    <Sheet open={userFormDrawerState !== null} onOpenChange={onDrawerClose}>
      <SheetContent side="right">
        <SheetHeader>
          {userFormDrawerState === 'edit' ? (
            <>
              <SheetTitle>Edit User</SheetTitle>
              <SheetDescription>Edit the user details below.</SheetDescription>
            </>
          ) : (
            <>
              <SheetTitle>Add New User</SheetTitle>
              <SheetDescription>Enter the details of the new user below.</SheetDescription>
            </>
          )}
        </SheetHeader>

        {userFormDrawerState === 'add' && <UserAddFormWrapper />}
        {userFormDrawerState === 'edit' && <UserEditFormWrapper />}

        <div className="my-3 text-right">
          {userFormDrawerState === 'add' && <Link href="/users/new">Add New User from Page</Link>}
          {userFormDrawerState === 'edit' && <Link href="/users/edit">Edit User from Page</Link>}
        </div>
      </SheetContent>
    </Sheet>
  );
}
