# Leetcode

Some leetcode.com problems solved for practicing purposes.

## Jest setup for testing

Using jest for testing. ES6 module expot/import does not work out-of-the-box. Module-type is needed and node needs to be executed in --experimental-vm-modules mode. 

```json
{
  "dependencies": {},
  "devDependencies": {
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jest": "^24.3.6",
    "jest": "^26.6.3"
  },
  "type": "module", 
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/.bin/jest"
  }
}
```
