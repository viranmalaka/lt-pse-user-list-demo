import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { UserRevenueTypes } from './UserRevenueTypes';

const mockStore = configureStore([]);

describe('UserRevenueTypes', () => {
  it('should display loading spinner when isLoading is true', () => {
    const store = mockStore({
      user: {
        users: [],
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <UserRevenueTypes />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display revenue types chart when isLoading is false', () => {
    const users = [
      {
        revenueTypes: [
          { type: 'subscription', amount: 100 },
          { type: 'ad', amount: 50 },
          { type: 'purchase', amount: 150 },
        ],
      },
      {
        revenueTypes: [
          { type: 'subscription', amount: 200 },
          { type: 'ad', amount: 100 },
          { type: 'purchase', amount: 250 },
        ],
      },
    ];

    const store = mockStore({
      user: {
        users,
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <UserRevenueTypes />
      </Provider>,
    );

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('User Revenue Types')).toBeInTheDocument();
  });
});
