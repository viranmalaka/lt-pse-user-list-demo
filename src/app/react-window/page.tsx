import { UserManagement } from '@/components/user-management/UserManagement';
import { UserTableWithReactWindow } from '@/components/user-management/UserTable/ReactWindow/UserTableWithReactWindow';

export default function ReactWindowPage() {
  return (
    <UserManagement caption="Implement the table with React Window">
      <UserTableWithReactWindow />
    </UserManagement>
  );
}
