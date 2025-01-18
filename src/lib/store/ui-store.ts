import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUIState {
  isDrawerOpen: boolean;
  theme: 'light' | 'dark';
}

const initialState: IUIState = {
  isDrawerOpen: false,
  theme: 'light',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,

  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

export const { setIsDrawerOpen, setTheme } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
