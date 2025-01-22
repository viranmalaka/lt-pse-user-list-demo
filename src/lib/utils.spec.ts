import { cn, generateAgeDistribution, getArrayFromObject } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
      expect(cn('class1', false && 'class2')).toBe('class1');
      expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
    });
  });

  describe('generateAgeDistribution', () => {
    it('should generate correct age distribution', () => {
      const users = [
        { age: 18 },
        { age: 22 },
        { age: 27 },
        { age: 33 },
        { age: 38 },
        { age: 44 },
        { age: 49 },
        { age: 55 },
        { age: 19 },
        { age: 23 },
        { age: 28 },
        { age: 34 },
        { age: 39 },
        { age: 45 },
        { age: 50 },
        { age: 56 },
      ];

      const expectedDistribution = {
        '0-20': 2,
        '21-25': 2,
        '26-30': 2,
        '31-35': 2,
        '36-40': 2,
        '41-45': 2,
        '46-50': 2,
        '51-60': 2,
      };

      expect(generateAgeDistribution(users)).toEqual(expectedDistribution);
    });

    it('should handle empty user list', () => {
      expect(generateAgeDistribution([])).toEqual({});
    });
  });

  describe('getArrayFromObject', () => {
    it('should convert object to array with default key and value names', () => {
      const input = { a: 1, b: 2, c: 3 };
      const expectedOutput = [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
        { key: 'c', value: 3 },
      ];

      expect(getArrayFromObject(input)).toEqual(expectedOutput);
    });

    it('should convert object to array with custom key and value names', () => {
      const input = { a: 1, b: 2, c: 3 };
      const expectedOutput = [
        { customKey: 'a', customValue: 1 },
        { customKey: 'b', customValue: 2 },
        { customKey: 'c', customValue: 3 },
      ];

      expect(getArrayFromObject(input, 'customKey', 'customValue')).toEqual(expectedOutput);
    });
  });
});
