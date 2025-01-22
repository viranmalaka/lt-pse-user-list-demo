'use client';

import { UserManagement } from '@/components/user-management/UserManagement';
import { UserTable } from '@/components/user-management/UserTable/UserTable';
import { useUserData } from '@/hooks/use-user-data';

export default function Home() {
  useUserData();
  return (
    <UserManagement caption="Implement the table with Native HTML">
      <UserTable />
    </UserManagement>
  );
}
