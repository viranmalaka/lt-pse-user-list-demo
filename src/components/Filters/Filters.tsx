"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserAddDrawer } from "../AddUserDrawer/AddUserDrawer";

export function Filters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4 items-center">
      <div className="flex-1 flex items-center gap-2 min-w-[200px]">
        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <Button onClick={() => setIsDrawerOpen(true)}>Add New</Button>
      <UserAddDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </div>
  );
}
