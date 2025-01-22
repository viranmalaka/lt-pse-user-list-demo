'use client';

import { UserManagement } from '@/components/user-management/UserManagement';
import { UserTableWithAgGrid } from '@/components/user-management/UserTable/AgGrid/UserTableWithAgGrid';
import { useUserData } from '@/hooks/use-user-data';

export default function Page() {
  useUserData();
  return (
    <UserManagement caption="Implement the table with AG Grid">
      <UserTableWithAgGrid />
    </UserManagement>
  );
}
