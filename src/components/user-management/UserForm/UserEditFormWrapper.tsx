import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { UserForm } from './UserForm';
import { FormUser } from '@/types/user';
import { FormikHelpers } from 'formik';
import { setUserFormLoading, updateUser } from '@/lib/store/user-store';
import to from 'await-to-js';
import { FEUserService } from '@/lib/user-service';
import { useToast } from '@/hooks/use-toast';
import { setUserFormDrawer } from '@/lib/store/ui-store';

export function UserEditFormWrapper() {
  const editingUser = useAppSelector((state) => state.user.editingUser);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const onSubmit = async (values: FormUser, helper?: FormikHelpers<FormUser>) => {
    if (editingUser) {
      dispatch(setUserFormLoading(true));
      const [err, data] = await to(FEUserService.updateUser(editingUser?.id, values));
      dispatch(setUserFormLoading(false));

      if (err) {
        return toast({ variant: 'destructive', title: 'Something went wrong', description: err.message });
      }

      dispatch(updateUser({ id: editingUser?.id, newUser: data }));
      helper?.resetForm();
      dispatch(setUserFormDrawer(null));
      toast({ title: 'User updated successfully' });
    }
  };

  if (editingUser === null) {
    return null;
  }
  return (
    <UserForm
      initialValues={{
        firstName: editingUser.firstName,
        lastName: editingUser.lastName,
        email: editingUser.email,
        age: editingUser.age,
        city: editingUser.city,
      }}
      onSubmit={onSubmit}
    />
  );
}
