import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.ts', '!**/*.d.ts'],
  testRegex: ['(\\.|/)(test|spec)\\.(ts|js)'],
  transform: {
    ['^.+\\.ts$']: 'ts-jest',
  },
  coverageReporters: ['text-summary', 'cobertura', 'json', 'lcov'],
};

export default config;
