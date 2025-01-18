"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { UserAddDrawer } from "../AddUserDrawer/AddUserDrawer";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
];

export function UserTable() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

  const handleEdit = (user: User) => {
    setUserToEdit(user);
    setIsDrawerOpen(true);
  };

  const handleDelete = (userId: number) => {
    // Implement delete logic here
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UserAddDrawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        userToEdit={userToEdit}
      />
    </>
  );
}
