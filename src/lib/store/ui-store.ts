import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUIState {
  userFormDrawer: 'add' | 'edit' | null; // null means closed
}

const initialState: IUIState = {
  userFormDrawer: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,

  reducers: {
    setUserFormDrawer: (state, action: PayloadAction<IUIState['userFormDrawer']>) => {
      state.userFormDrawer = action.payload;
    },
  },
});

export const { setUserFormDrawer } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
