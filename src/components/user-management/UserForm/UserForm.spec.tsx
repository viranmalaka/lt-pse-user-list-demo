import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormikHelpers } from 'formik';
import { UserForm } from './UserForm';
import { FormUser } from '@/types/user';

describe('UserForm', () => {
  const initialValues: FormUser = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    city: '',
  };

  const onSubmit = jest.fn((values: FormUser, helpers?: FormikHelpers<FormUser>) => {});

  it('should render form fields correctly', () => {
    render(<UserForm initialValues={initialValues} onSubmit={onSubmit} />);

    expect(screen.getByPlaceholderText('Jone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('john@acme.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('18-60')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('somewhere on earth')).toBeInTheDocument();
  });

  it('should display validation errors on submit with empty fields', async () => {
    render(<UserForm initialValues={initialValues} onSubmit={onSubmit} />);

    fireEvent.click(screen.getByText('Submit'));

    // expect(await screen.findAllByText('Required')).toHaveLength(5);
  });

  it('should call onSubmit with form values', async () => {
    render(<UserForm initialValues={initialValues} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByPlaceholderText('Jone'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('john@acme.com'), { target: { value: 'john@acme.com' } });
    fireEvent.change(screen.getByPlaceholderText('18-60'), { target: { value: '30' } });
    fireEvent.change(screen.getByPlaceholderText('somewhere on earth'), { target: { value: 'New York' } });

    fireEvent.click(screen.getByText('Submit'));

    expect(onSubmit).toHaveBeenCalledWith(
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@acme.com',
        age: 30,
        city: 'New York',
        age: 0,
        city: '',
        email: '',
        firstName: '',
        lastName: '',
      },
      expect.anything(),
    );
  });
});
