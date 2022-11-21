import { eslint } from '@betterer/eslint';
const eslintConfig = require('./.eslintrc.js');

export default {
  'ts lint': eslint(eslintConfig.overrides[0].rules).include(['src/**/*.ts']),
};
