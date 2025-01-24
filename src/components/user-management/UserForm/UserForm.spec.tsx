import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render form fields correctly', () => {
    render(<UserForm initialValues={initialValues} onSubmit={onSubmit} />);

    expect(screen.getByPlaceholderText('John')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('john@acme.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('18-60')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('somewhere on earth')).toBeInTheDocument();
  });

  it('should call onSubmit with form values', async () => {
    render(<UserForm initialValues={initialValues} onSubmit={onSubmit} />);

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'John' } });
      fireEvent.change(screen.getByPlaceholderText('Doe'), { target: { value: 'Doe' } });
      fireEvent.change(screen.getByPlaceholderText('john@acme.com'), { target: { value: 'john@acme.com' } });
      fireEvent.change(screen.getByPlaceholderText('18-60'), { target: { value: '30' } });
      fireEvent.change(screen.getByPlaceholderText('somewhere on earth'), { target: { value: 'New York' } });
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText('Submit'));
    });

    expect(onSubmit).toHaveBeenCalledWith(
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@acme.com',
        age: 30,
        city: 'New York',
      },
      expect.anything(),
    );
  });
});
