import { UserManagement } from '@/components/user-management/UserManagement';
import { UserTable } from '@/components/user-management/UserTable/UserTable';

export default function Home() {
  return (
    <UserManagement>
      <UserTable />
    </UserManagement>
  );
}
