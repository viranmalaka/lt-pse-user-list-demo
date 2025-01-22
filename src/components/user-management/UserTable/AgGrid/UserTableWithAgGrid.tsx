'use client';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

import { columnDef } from './column-def';
import { useAppSelector } from '@/lib/store/store';
import { selectFilteredUsers } from '@/lib/store/user-store';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export function UserTableWithAgGrid() {
  const users = useAppSelector(selectFilteredUsers);

  return (
    <div style={{ height: 'calc(100vh - 200px)' }}>
      <AgGridReact
        rowData={users}
        columnDefs={columnDef}
        rowHeight={55}
        rowClass="dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      />
    </div>
  );
}
