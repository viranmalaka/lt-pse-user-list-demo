'use client';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

import { columnDef } from './column-def';
import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { selectFilteredUsers, setEditingUser } from '@/lib/store/user-store';
import { Spinner } from '@/components/ui/spinner';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRouter } from 'next/navigation';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export function UserTableWithAgGrid() {
  const users = useAppSelector(selectFilteredUsers);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const isMobile = useIsMobile();
  const router = useRouter();
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner>Loading...</Spinner>
      </div>
    );
  }

  return (
    <div style={{ height: 'calc(100vh - 200px)' }}>
      <AgGridReact
        rowData={users}
        columnDefs={isMobile ? columnDef.slice(0, 3) : columnDef}
        rowHeight={55}
        rowClass="dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        onRowClicked={(event) => {
          if (isMobile && event.data) {
            dispatch(setEditingUser(event.data));
            router.push(`/users/edit`);
          }
        }}
      />
    </div>
  );
}
