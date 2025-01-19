export type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  lastWeekPurchases: Array<{
    date: Date;
    amount: number;
  }>;
  revenueTypes: Array<{
    type: string;
    amount: number;
  }>;
  email: string;
};

export type FormUser = {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  email: string;
};
