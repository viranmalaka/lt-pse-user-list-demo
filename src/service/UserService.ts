import { faker } from "@faker-js/faker";
import { User } from "@/types/user";

export class UserService {
  static userList = Array(1000)
    .fill({})
    .map(() => {
      return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
        city: faker.location.city(),
        lastWeekPurchases: Array(7)
          .fill({})
          .map(() => ({
            date: faker.date.recent(),
            amount: faker.number.float({ min: 0, max: 1000 }),
          })),
        revenueTypes: [
          {
            type: "subscription",
            amount: faker.number.float({ min: 0, max: 1000 }),
          },
          {
            type: "purchase",
            amount: faker.number.float({ min: 0, max: 1000 }),
          },
          { type: "ad", amount: faker.number.float({ min: 0, max: 1000 }) },
        ],
        email: faker.internet.email(),
      };
    });

  static getUserList() {
    return this.userList;
  }

  static addUser(newUser: {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    email: string;
  }) {
    const user: User = {
      id: faker.string.uuid(),
      ...newUser,
      lastWeekPurchases: Array(7)
        .fill({})
        .map(() => ({
          date: faker.date.recent(),
          amount: faker.number.float({ min: 0, max: 1000 }),
        })),
      revenueTypes: [
        {
          type: "subscription",
          amount: faker.number.float({ min: 0, max: 1000 }),
        },
        { type: "purchase", amount: faker.number.float({ min: 0, max: 1000 }) },
        { type: "ad", amount: faker.number.float({ min: 0, max: 1000 }) },
      ],
    };
    this.userList.push(user);
    return user;
  }

  static deleteUser(userId: string) {
    this.userList = this.userList.filter((user) => user.id !== userId);
  }

  static updateUser(userId: string, user: User) {
    this.userList = this.userList.map((u) => (u.id === userId ? user : u));
  }
}
