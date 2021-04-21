// jest.config.ts
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/@babel',
    '<rootDir>/node_modules/@jest',
    '<rootDir>/node_modules/lodash',
    'signal-exit',
    'is-typedarray',
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  testURL:'http://localhost:3000'
};
export default config;
