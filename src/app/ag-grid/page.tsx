import { UserManagement } from '@/components/user-management/UserManagement';
import { UserTableWithAgGrid } from '@/components/user-management/UserTable/AgGrid/UserTableWithAgGrid';

export default function Page() {
  return (
    <UserManagement>
      <UserTableWithAgGrid />
    </UserManagement>
  );
}
