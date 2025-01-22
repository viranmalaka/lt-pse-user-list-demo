'use client';
import { UserTableWithAgGrid } from '@/components/user-management/UserTable/AgGrid/UserTableWithAgGrid';
import { useUserData } from '@/hooks/use-user-data';

export default function Page() {
  useUserData();
  return <UserTableWithAgGrid />;
}
