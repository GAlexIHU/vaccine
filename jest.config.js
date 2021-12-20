"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
exports.default = config;
