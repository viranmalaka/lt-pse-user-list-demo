'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export function UserAddDrawer() {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{userToEdit ? 'Edit User' : 'Add New User'}</SheetTitle>
          <SheetDescription>
            {userToEdit ? 'Edit the user details below.' : 'Enter the details of the new user below.'}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
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
            <Input id="role" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} required />
          </div>
          <Button type="submit" className="w-full">
            {userToEdit ? 'Update User' : 'Add User'}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
