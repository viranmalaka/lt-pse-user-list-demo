import { configureStore } from '@reduxjs/toolkit';
import { uiReducer, setUserFormDrawer } from './ui-store';
import { RootState } from './store';

describe('uiSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: { ui: uiReducer } });
  });

  it('should handle initial state', () => {
    expect((store.getState() as RootState).ui).toEqual({
      userFormDrawer: null,
    });
  });

  it('should handle setUserFormDrawer to add', () => {
    store.dispatch(setUserFormDrawer('add'));
    expect((store.getState() as RootState).ui.userFormDrawer).toBe('add');
  });

  it('should handle setUserFormDrawer to edit', () => {
    store.dispatch(setUserFormDrawer('edit'));
    expect((store.getState() as RootState).ui.userFormDrawer).toBe('edit');
  });

  it('should handle setUserFormDrawer to null', () => {
    store.dispatch(setUserFormDrawer(null));
    expect((store.getState() as RootState).ui.userFormDrawer).toBe(null);
  });
});
