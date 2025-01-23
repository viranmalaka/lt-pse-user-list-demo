import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { UserAgeDistributionDashboardWidget } from './UserAgeDistribution';
import { Spinner } from '../ui/spinner';

const mockStore = configureStore([]);

describe('UserAgeDistributionDashboardWidget', () => {
  it('should display loading spinner when isLoading is true', () => {
    const store = mockStore({
      user: {
        users: [],
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <UserAgeDistributionDashboardWidget />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display age distribution chart when isLoading is false', () => {
    const users = [{ age: 25 }, { age: 30 }, { age: 35 }, { age: 40 }, { age: 45 }];

    const store = mockStore({
      user: {
        users,
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <UserAgeDistributionDashboardWidget />
      </Provider>,
    );

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('User Age Distribution')).toBeInTheDocument();
  });
});
