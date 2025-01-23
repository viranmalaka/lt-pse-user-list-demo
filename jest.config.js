const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
  moduleNameMapper: {
    'lucide-react': '<rootDir>/node_modules/lucide-react/dist/cjs/lucide-react.js',
    'parse5/lib/parser/index.js': '<rootDir>/node_modules/hast-util-raw/node_modules/parse5/lib/parser/index.js',
  },
  testEnvironment: 'jsdom',
  moduleMapper: {
    '^@/(.*)$': './src/$1',
    // '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
