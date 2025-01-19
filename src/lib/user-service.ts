import axios from 'axios';
import { FormUser, User } from '@/types/user';

const client = axios.create({
  baseURL: '/api/users',
});

export class FEUserService {
  static async getUsers() {
    return client.get<User[]>('/').then((res) => res.data);
  }

  static async createUser(user: FormUser) {
    return client.post('/', user).then((res) => res.data);
  }

  static async updateUser(id: string, user: User) {
    return client.put(`/${id}`, user).then((res) => res.data);
  }

  static async deleteUser(id: string) {
    return client.delete(`/${id}`).then((res) => res.data);
  }
}
