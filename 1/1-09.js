import { log } from '../helpers/index.js'

const dec = n => n - 1
const inc = n => n + 1

function plus1(a, b) {
  return a === 0
    ? b
    : inc(plus1(dec(a), b))
}

function plus2(a, b) {
  return a === 0
    ? b
    : plus2(dec(a), inc(b))
}

log(plus1(4, 5))
log(plus2(4, 5))

// The function "plus1" executes addition in a recursive way,
// whereas the function "plus2" executes addition in an iterative way.
// The function "plus1" saves the function call in process of calling another "plus1" function
// till the argument "a" goes to zero. Then, the function recurse back to
// the previous function call to return the increased result with calling
// "inc" function.
// Meanwhile, the function "plus2" calculates the current result by calling
// "dec(a)" and "inc(b)" at the same time. On the arguments, the function
// "plus2" only saves the current result of the arguments "a" and "b".
// On the final phase of the recursion, "plus2" returns the last result of
// "b" that doesn't require another calculation on the previous function call
// of the recursion.
