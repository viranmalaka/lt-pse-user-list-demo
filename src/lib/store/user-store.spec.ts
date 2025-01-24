import { configureStore } from '@reduxjs/toolkit';
import {
  userReducer,
  setUsers,
  setIsLoading,
  setError,
  setSearchQuery,
  setUserFormLoading,
  addUser,
  setEditingUser,
  updateUser,
  deleteUser,
  selectFilteredUsers,
} from './user-store';
import { User } from '@/types/user';
import { RootState } from './store';

const mockUser = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
  lastWeekPurchases: [],
  revenueTypes: [],
  email: 'john.doe@example.com',
};

describe('userSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: { user: userReducer } });
  });

  it('should handle initial state', () => {
    expect((store.getState() as RootState).user).toEqual({
      users: [],
      isLoading: false,
      error: '',
      searchQuery: '',
      userFormLoading: false,
      editingUser: null,
    });
  });

  it('should handle setUsers', () => {
    const users: User[] = [mockUser];
    store.dispatch(setUsers(users));
    expect((store.getState() as RootState).user.users).toEqual(users);
  });

  it('should handle setIsLoading', () => {
    store.dispatch(setIsLoading(true));
    expect((store.getState() as RootState).user.isLoading).toBe(true);
  });

  it('should handle setError', () => {
    const error = 'An error occurred';
    store.dispatch(setError(error));
    expect((store.getState() as RootState).user.error).toBe(error);
  });

  it('should handle setSearchQuery', () => {
    const searchQuery = 'John';
    store.dispatch(setSearchQuery(searchQuery));
    expect((store.getState() as RootState).user.searchQuery).toBe(searchQuery);
  });

  it('should handle setUserFormLoading', () => {
    store.dispatch(setUserFormLoading(true));
    expect((store.getState() as RootState).user.userFormLoading).toBe(true);
  });

  it('should handle addUser', () => {
    store.dispatch(addUser(mockUser));
    expect((store.getState() as RootState).user.users).toContainEqual(mockUser);
  });

  it('should handle setEditingUser', () => {
    const user: User = { ...mockUser, id: '1', firstName: 'edited' };
    store.dispatch(setEditingUser(user));
    expect((store.getState() as RootState).user.editingUser).toEqual(user);
  });

  it('should handle updateUser', () => {
    const initialUser: User = { ...mockUser, id: '1', firstName: 'John', lastName: 'Doe', age: 30 };
    const updatedUser: User = { ...mockUser, id: '1', firstName: 'Jane', lastName: 'Doe', age: 25 };
    store.dispatch(setUsers([initialUser, { ...initialUser, id: '2' }]));
    store.dispatch(updateUser({ id: '1', newUser: updatedUser }));
    expect((store.getState() as RootState).user.users).toContainEqual(updatedUser);
  });

  it('should handle deleteUser', () => {
    store.dispatch(setUsers([mockUser]));
    store.dispatch(deleteUser('1'));
    expect((store.getState() as RootState).user.users).not.toContainEqual(mockUser);
  });

  describe('selectFilteredUsers', () => {
    it('should return all users if no search query', () => {
      const users: User[] = [mockUser];
      store.dispatch(setUsers(users));
      const result = selectFilteredUsers(store.getState() as RootState);
      expect(result).toEqual(users);
    });

    it('should filter users by name', () => {
      const users: User[] = [
        { ...mockUser, id: '1', firstName: 'John', lastName: 'Doe', age: 30 },
        { ...mockUser, id: '2', firstName: 'Jane', lastName: 'Smith', age: 25 },
      ];
      store.dispatch(setUsers(users));
      store.dispatch(setSearchQuery('Jane'));
      const result = selectFilteredUsers(store.getState() as RootState);
      expect(result).toEqual([users[1]]);
    });

    it('should filter users by age range', () => {
      const users: User[] = [
        { ...mockUser, id: '1', firstName: 'John', lastName: 'Doe', age: 30 },
        { ...mockUser, id: '2', firstName: 'Jane', lastName: 'Smith', age: 25 },
      ];
      store.dispatch(setUsers(users));
      store.dispatch(setSearchQuery('age:20-30'));
      const result = selectFilteredUsers(store.getState() as RootState);
      expect(result).toEqual(users);
    });

    it('should filter users by exact age', () => {
      const users: User[] = [
        { ...mockUser, id: '1', firstName: 'John', lastName: 'Doe', age: 30 },
        { ...mockUser, id: '2', firstName: 'Jane', lastName: 'Smith', age: 25 },
      ];
      store.dispatch(setUsers(users));
      store.dispatch(setSearchQuery('age:25'));
      const result = selectFilteredUsers(store.getState() as RootState);
      expect(result).toEqual([users[1]]);
    });
  });
});
