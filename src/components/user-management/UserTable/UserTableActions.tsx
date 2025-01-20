import { Button } from '@/components/ui/button';
import { DeleteUser } from './DeleteUser';
import { User } from '@/types/user';
import { useAppDispatch } from '@/lib/store/store';
import { setEditingUser } from '@/lib/store/user-store';
import { setUserFormDrawer } from '@/lib/store/ui-store';
import { Edit2 } from 'lucide-react';

type UserTableActionsProps = {
  user: User;
};

export function UserTableActions({ user }: UserTableActionsProps) {
  const dispatch = useAppDispatch();

  const handleEdit = (user: User) => {
    dispatch(setEditingUser(user));
    dispatch(setUserFormDrawer('edit'));
  };

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="sm" onClick={() => handleEdit(user)}>
        <Edit2 />
      </Button>
      <DeleteUser user={user} />
    </div>
  );
}
