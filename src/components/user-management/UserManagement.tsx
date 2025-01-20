'use client';

import { PropsWithChildren, useEffect } from 'react';
import { Filters } from './Filters/Filters';
import { setError, setIsLoading, setUsers } from '@/lib/store/user-store';
import { FEUserService } from '@/lib/user-service';
import to from 'await-to-js';
import { useAppDispatch } from '@/lib/store/store';
import { UserFormDrawer } from './UserFormDrawer/UserFormDrawer';

export function UserManagement({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  // this all implementation can be moved to react query. but as I need to use redux I am keeping it here
  useEffect(() => {
    (async () => {
      dispatch(setIsLoading(true));
      const [err, users] = await to(FEUserService.getUsers());
      dispatch(setIsLoading(false));
      if (err) {
        dispatch(setError(err.message));
      } else if (users) {
        dispatch(setUsers(users));
      }
    })();
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <Filters />
      <UserFormDrawer />
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
