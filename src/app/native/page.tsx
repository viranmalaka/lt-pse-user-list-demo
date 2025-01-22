import { UserManagement } from '@/components/user-management/UserManagement';
import { UserTable } from '@/components/user-management/UserTable/UserTable';

export default function Home() {
  return (
    <UserManagement caption="Implement the table with Native HTML">
      <UserTable />
    </UserManagement>
  );
}
