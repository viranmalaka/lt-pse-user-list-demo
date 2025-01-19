import { User } from '@/types/user';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IUserState {
  users: User[];
  isLoading: boolean;
  error: string;
  searchQuery: string;
  userFormLoading: boolean;
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: '',
  searchQuery: '',
  userFormLoading: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setUserFormLoading: (state, action: PayloadAction<boolean>) => {
      state.userFormLoading = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const selectFilteredUsers = createSelector(
  (state: RootState) => state.user.users,
  (state: RootState) => state.user.searchQuery,
  (users, searchQuery) => {
    if (!searchQuery) {
      return users;
    }

    // search by age
    if (searchQuery.toLowerCase().startsWith('age:')) {
      const ageQuery = searchQuery.replace('age:', '');
      const ageRange = ageQuery.split('-').map((n) => parseInt(n, 10));

      if (ageRange.length === 1) {
        return users.filter((user) => user.age === ageRange[0]);
      }

      return users.filter((user) => user.age >= ageRange[0] && user.age <= ageRange[1]);
    }

    return users.filter((user) => {
      const name = `${user.firstName} ${user.lastName}`;
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  },
);

export const { setUsers, setIsLoading, setError, setSearchQuery, setUserFormLoading, addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
