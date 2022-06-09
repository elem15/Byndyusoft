const { strict: assert } = require('assert');
const getSumOfMin = require('../src/get-sum-of-min.js');

assert.equal(getSumOfMin(['']), null);
assert.equal(getSumOfMin([' ']), null);
assert.equal(getSumOfMin([' ', ' ']), null);
assert.equal(getSumOfMin(['7']), 7);
assert.equal(getSumOfMin([' ', '  ', ' 3 ']), 3);
assert.equal(getSumOfMin(['  2 k ', '  -1k', ' ']), 1);
assert.equal(getSumOfMin(['4', '0', '3', '19', '492', '-10', '-100.2']), -110.2);
assert.equal(getSumOfMin([-100, -10.1, 3, 19, 455]), -110.1);

console.log('Тесты прошли успешно!');