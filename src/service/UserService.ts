import { faker } from '@faker-js/faker';
import { User } from '@/types/user';

// TODO: refactor faker functionality to create the default list and adding list.
export class UserService {
  private static createUsers(params: {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    email: string;
  }) {
    return {
      ...params,
      lastWeekPurchases: Array(7)
        .fill({})
        .map(() => ({
          date: faker.date.recent(),
          amount: faker.number.float({ min: 0, max: 10 }),
        })),
      revenueTypes: [
        {
          type: 'subscription',
          amount: faker.number.int({ min: 30, max: 100 }),
        },
        {
          type: 'purchase',
          amount: faker.number.int({ min: 30, max: 70 }),
        },
        { type: 'ad', amount: faker.number.int({ min: 30, max: 40 }) },
      ],
    };
  }

  static userList = Array(1000)
    .fill({})
    .map(() =>
      UserService.createUsers({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
        city: faker.location.city(),
        email: faker.internet.email(),
      }),
    );

  static getUserList() {
    return this.userList;
  }

  static addUser(newUser: { firstName: string; lastName: string; age: number; city: string; email: string }) {
    const user: User = UserService.createUsers({
      id: faker.string.uuid(),
      ...newUser,
    });
    this.userList.push(user);
    return user;
  }

  static deleteUser(userId: string) {
    this.userList = this.userList.filter((user) => user.id !== userId);
    return userId;
  }

  static updateUser(userId: string, user: User) {
    this.userList = this.userList.map((u) => {
      if (u.id === userId) {
        return { ...u, ...user };
      }
      return u;
    });
    return user;
  }
}
