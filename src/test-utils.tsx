import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

// As a basic setup, import your same slice reducers
import { RootState, store } from './lib/store/store';
import { initialState as userInitialState } from './lib/store/user-store';
import { initialState as uiInitialState } from './lib/store/ui-store';
import { configureStore } from '@reduxjs/toolkit';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: RootState;
}

export function renderWithProviders(ui: React.ReactElement, extendedRenderOptions: ExtendedRenderOptions = {}) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={renderOptions.store ?? store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export const makeStore = (store: any) => {
  return configureStore({
    reducer: {
      user: userInitialState,
      ui: uiInitialState,
      ...store,
    },
  });
};
