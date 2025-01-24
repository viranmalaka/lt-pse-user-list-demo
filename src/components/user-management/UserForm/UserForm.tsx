import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormUser } from '@/types/user';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';

type UserFormProps = {
  initialValues: FormUser;
  onSubmit: (values: FormUser, helper?: FormikHelpers<FormUser>) => void;
};

export function UserForm({ initialValues, onSubmit }: UserFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className="-mx-2 flex flex-wrap">
          <div className="w-full px-2 md:w-1/2">
            <Field name="firstName">
              {({ field, meta }: FieldProps<string>) => (
                <div className="my-2">
                  <Label>First Name</Label>
                  <Input type="text" placeholder="John" {...field} />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <Field name="lastName">
              {({ field, meta }: FieldProps<string>) => (
                <div className="my-2">
                  <Label>Last Name</Label>
                  <Input type="text" placeholder="Doe" {...field} />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>
        </div>

        <Field name="email">
          {({ field, meta }: FieldProps<string>) => (
            <div className="my-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="john@acme.com" {...field} />
              {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            </div>
          )}
        </Field>

        <div className="-mx-2 flex flex-wrap">
          <div className="w-full px-2 md:w-1/2">
            <Field name="age">
              {({ field, meta }: FieldProps<number>) => (
                <div className="my-2">
                  <Label>Age</Label>
                  <Input type="number" placeholder="18-60" {...field} />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <Field id="city" name="city" placeholder="somewhere on earth">
              {({ field, meta }: FieldProps<string>) => (
                <div className="my-2">
                  <Label>City</Label>
                  <Input type="text" placeholder="somewhere on earth" {...field} />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
