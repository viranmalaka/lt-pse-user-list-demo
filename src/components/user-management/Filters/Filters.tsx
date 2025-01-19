'use client';

import { ChangeEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { setSearchQuery } from '@/lib/store/user-store';
import { setUserFormDrawer } from '@/lib/store/ui-store';

export function Filters() {
  const searchQuery = useAppSelector((state) => state.user.searchQuery);
  const dispatch = useAppDispatch();

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleAddNewModal = () => {
    dispatch(setUserFormDrawer('add'));
  };

  return (
    <div className="mb-4 flex flex-wrap items-center gap-4">
      <div className="flex min-w-[200px] flex-1 items-center gap-2">
        <Input
          type="text"
          placeholder="Search name city and email here. To filter by age use 'age:30' or 'age:30-40' format"
          value={searchQuery}
          onChange={handleSearch}
          className="flex-1"
        />
      </div>
      <Button onClick={handleAddNewModal}>Add New</Button>
    </div>
  );
}
