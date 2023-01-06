import { log } from '../helpers/index.js'

log(10); // 10

log(5 + 3 + 4); // 12

log(9 - 1); // 8

log(6 / 2); // 3

log(2 * 4 + (4 - 6)); // 6

const a = 3; 

const b = a + 1;

log(a + b + a * b); // 19

log(a === b); // false

log(b > a && b < a * b ? b : a); // 4

log(
  a === 4
    ? 6
    : b === 4
    ? 6 + 7 + a
    : 25
); // 16

log(
  2 + (b > a ? b : a)
); // 6

log(
  (a > b
   ? a
   : a < b
   ? b
   : -1)
    *
    (a + 1)
); // 16

