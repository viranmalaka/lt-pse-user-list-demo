import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { UserForm } from './UserForm';
import { FormUser } from '@/types/user';
import { FormikHelpers } from 'formik';
import { setUserFormLoading, updateUser } from '@/lib/store/user-store';
import to from 'await-to-js';
import { FEUserService } from '@/lib/user-service';
import { useToast } from '@/hooks/use-toast';
import { setUserFormDrawer } from '@/lib/store/ui-store';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type UserEditFormWrapperProps = {
  isMountedOnPage?: boolean;
};

export function UserEditFormWrapper({ isMountedOnPage }: UserEditFormWrapperProps) {
  const editingUser = useAppSelector((state) => state.user.editingUser);
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const router = useRouter();

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

      if (isMountedOnPage) {
        router.push('/users');
      }
    }
  };

  if (editingUser === null) {
    return null;
  }
  return (
    <Card>
      <CardHeader>Edit User</CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
