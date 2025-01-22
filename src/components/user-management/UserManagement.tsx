'use client';

import { PropsWithChildren } from 'react';
import { Filters } from './Filters/Filters';
import { UserFormDrawer } from './UserFormDrawer/UserFormDrawer';

export function UserManagement({ children, caption }: PropsWithChildren<{ caption?: string }>) {
  return (
    <div className="space-y-4">
      {caption && <h2 className="text-sm font-semibold">{caption}</h2>}
      <Filters />
      <UserFormDrawer />
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
