'use client';

import { FixedSizeList as List } from 'react-window';
import AutoSizer, { Size } from 'react-virtualized-auto-sizer';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppSelector } from '@/lib/store/store';
import { selectFilteredUsers } from '@/lib/store/user-store';

import { getRowStyle } from './utils';
import { DataTableRow } from './DataTableRow';
import { Spinner } from '@/components/ui/spinner';

export function UserTableWithReactWindow() {
  const users = useAppSelector(selectFilteredUsers);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner>Loading...</Spinner>
      </div>
    );
  }

  return (
    <div style={{ height: 'calc(100vh - 200px)' }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={getRowStyle(5)}>Full name</TableHead>
            <TableHead style={getRowStyle(4)}>Email</TableHead>
            <TableHead style={getRowStyle(2)}>Age</TableHead>
            <TableHead style={getRowStyle(2)}>Revenue</TableHead>
            <TableHead style={getRowStyle(4)}>Last Week Purchases</TableHead>
            <TableHead style={getRowStyle(3)}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
      <AutoSizer>
        {({ height, width }: Size) => (
          <div>
            <List height={height - 50} width={width} itemCount={users.length ?? 0} itemSize={55}>
              {(props) => <DataTableRow user={users[props.index]} {...props} />}
            </List>
          </div>
        )}
      </AutoSizer>
    </div>
  );
}
