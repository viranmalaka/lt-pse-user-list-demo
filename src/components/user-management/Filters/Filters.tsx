'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Filters() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="mb-4 flex flex-wrap items-center gap-4">
      <div className="flex min-w-[200px] flex-1 items-center gap-2">
        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <Button>Add New</Button>
      {/* <UserAddDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} /> */}
    </div>
  );
}
