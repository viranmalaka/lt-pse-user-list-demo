import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Filters } from './Filters';
import { setSearchQuery } from '@/lib/store/user-store';

// had to use configureStore from redux-mock-store to create a mock store which is not recommended due to the time being.
const mockStore = configureStore([]);

describe('Filters', () => {
  it('should dispatch setSearchQuery action on input change', () => {
    const store = mockStore({
      user: {
        searchQuery: '',
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Filters />
      </Provider>,
    );

    const input = screen.getByPlaceholderText(
      "Search name city and email here. To filter by age use 'age:30' or 'age:30-40' format",
    );

    fireEvent.change(input, { target: { value: 'test query' } });

    expect(store.dispatch).toHaveBeenCalledWith(setSearchQuery('test query'));
  });

  it('should display the search query from the store', () => {
    const store = mockStore({
      user: {
        searchQuery: 'initial query',
      },
    });

    render(
      <Provider store={store}>
        <Filters />
      </Provider>,
    );

    const input = screen.getByPlaceholderText(
      "Search name city and email here. To filter by age use 'age:30' or 'age:30-40' format",
    );

    expect(input).toHaveValue('initial query');
  });
});
