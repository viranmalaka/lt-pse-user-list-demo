import { FormUser } from '@/types/user';
import { UserForm } from './UserForm';
import { FormikHelpers } from 'formik';
import { useAppDispatch } from '@/lib/store/store';
import { addUser, setUserFormLoading } from '@/lib/store/user-store';
import { FEUserService } from '@/lib/user-service';
import to from 'await-to-js';
import { useToast } from '@/hooks/use-toast';
import { setUserFormDrawer } from '@/lib/store/ui-store';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type UserAddFormWrapperProps = {
  isMountedOnPage?: boolean;
};

export function UserAddFormWrapper({ isMountedOnPage }: UserAddFormWrapperProps) {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (values: FormUser, helper?: FormikHelpers<FormUser>) => {
    dispatch(setUserFormLoading(true));
    const [err, data] = await to(FEUserService.createUser(values));
    dispatch(setUserFormLoading(false));

    if (err) {
      return toast({ variant: 'destructive', title: 'Something went wrong', description: err.message });
    }

    dispatch(addUser(data));
    helper?.resetForm();
    dispatch(setUserFormDrawer(null));
    toast({ title: 'User created successfully' });
    if (isMountedOnPage) {
      router.push('/users');
    }
  };

  return (
    <Card>
      <CardHeader>Add New User</CardHeader>
      <CardContent>
        <UserForm
          initialValues={{
            firstName: '',
            lastName: '',
            age: 0,
            city: '',
            email: '',
          }}
          onSubmit={onSubmit}
        />
      </CardContent>
    </Card>
  );
}
