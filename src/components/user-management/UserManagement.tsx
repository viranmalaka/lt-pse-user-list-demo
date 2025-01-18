import { useEffect } from 'react';
import { Filters } from './Filters/Filters';
import { UserTable } from './UserTable/UserTable';

export function UserManagement() {
  useEffect(() => {}, []);

  return (
    <div className="space-y-4">
      <Filters />
      <div className="overflow-x-auto">
        <UserTable />
      </div>
    </div>
  );
}
