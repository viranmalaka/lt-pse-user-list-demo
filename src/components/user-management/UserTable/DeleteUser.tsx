import { Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { User } from '@/types/user';
import { useState } from 'react';
import to from 'await-to-js';
import { FEUserService } from '@/lib/user-service';
import { useToast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { deleteUser } from '@/lib/store/user-store';

type DeleteUserProps = { user: User };

export function DeleteUser({ user }: DeleteUserProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    setIsLoading(true);
    const [err] = await to(FEUserService.deleteUser(user.id));
    setIsLoading(false);

    if (err) {
      toast({ variant: 'destructive', title: 'Failed to delete user', description: err.message });
      return;
    }
    toast({ title: 'User deleted successfully' });
    dispatch(deleteUser(user.id));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>You are going to delete {user.firstName} user. Are you sure about this?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button" variant="destructive" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
