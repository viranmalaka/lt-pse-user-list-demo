import { AgeDistribution } from '@/types/age-distribution';
import { User } from '@/types/user';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAgeDistribution(users: User[]) {
  return users.reduce((acc, user) => {
    if (user.age <= 20) {
      acc['0-20'] = (acc['0-20'] ?? 0) + 1;
    } else if (user.age <= 25) {
      acc['21-25'] = (acc['21-25'] ?? 0) + 1;
    } else if (user.age <= 30) {
      acc['26-30'] = (acc['26-30'] ?? 0) + 1;
    } else if (user.age <= 35) {
      acc['31-35'] = (acc['31-35'] ?? 0) + 1;
    } else if (user.age <= 40) {
      acc['36-40'] = (acc['36-40'] ?? 0) + 1;
    } else if (user.age <= 45) {
      acc['41-45'] = (acc['41-45'] ?? 0) + 1;
    } else if (user.age <= 50) {
      acc['46-50'] = (acc['46-50'] ?? 0) + 1;
    } else {
      acc['51-60'] = (acc['51-60'] ?? 0) + 1;
    }

    return acc;
  }, {} as AgeDistribution);
}

export function getArrayFromObject(input: Record<string, unknown>, keyName = 'key', valueName = 'value') {
  return Object.entries(input).map(([key, value]) => ({ [keyName]: key, [valueName]: value }));
}
