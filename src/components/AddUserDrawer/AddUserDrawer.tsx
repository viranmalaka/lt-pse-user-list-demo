"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface UserAddDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  userToEdit?: User;
}

interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
}

export function UserAddDrawer({
  isOpen,
  setIsOpen,
  userToEdit,
}: UserAddDrawerProps) {
  const [user, setUser] = useState<User>(
    userToEdit || { name: "", email: "", role: "" },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement user creation/update logic here
    console.log("User data:", user);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>{userToEdit ? "Edit User" : "Add New User"}</SheetTitle>
          <SheetDescription>
            {userToEdit
              ? "Edit the user details below."
              : "Enter the details of the new user below."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {userToEdit ? "Update User" : "Add User"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
