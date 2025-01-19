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
        <Field name="firstName">
          {({ field, form, meta }: FieldProps<string>) => (
            <div className="my-2">
              <Label>First Name</Label>
              <Input type="text" placeholder="Jone" {...field} />
              {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            </div>
          )}
        </Field>

        <Field name="lastName">
          {({ field, form, meta }: FieldProps<string>) => (
            <div className="my-2">
              <Label>Last Name</Label>
              <Input type="text" placeholder="Doe" {...field} />
              {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            </div>
          )}
        </Field>

        <Field name="email">
          {({ field, form, meta }: FieldProps<string>) => (
            <div className="my-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="john@acme.com" {...field} />
              {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            </div>
          )}
        </Field>

        <Field name="age">
          {({ field, form, meta }: FieldProps<number>) => (
            <div className="my-2">
              <Label>Age</Label>
              <Input type="number" placeholder="18-60" {...field} />
              {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            </div>
          )}
        </Field>

        <Field id="city" name="city" placeholder="somewhere on earth">
          {({ field, form, meta }: FieldProps<string>) => (
            <div className="my-2">
              <Label>City</Label>

              <Input type="text" placeholder="somewhere on earth" {...field} />
              {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            </div>
          )}
        </Field>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
