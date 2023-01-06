import { log } from '../helpers/index.js'

function p() {
  log("returning p...")
  return p()
}

function test(x, y) {
  return x === 0 ? 0 : y;
}


log("testing start!")
test(0, p());
log("testing finished!")

// In normal-order evaluation, the expression "p()" in the argument list of
// the function application expression "test(0, p())" is preserved when
// the interpreter is calculating the result of the function "test(x, y)".
// It means that the parameter "x" and "y" is substituted with "0" and "p()" each
// in the expression "x === 0 ? 0 : y".
// The expanded expression is "0 === 0 ? 0 : p()". The interpreter
// calculates the final result by reducing the final expanded expression, and 
// the result of the function application expression "test(0, p())" is "0".
// (The expression "p()" is not evaluated since the alternative expression is not calculated
// due to the result of the predicate)
// In applicative-order evaluation, the expression "p()" in the argument list of
// the function application expression "test(0, p())" is calculated first,
// that leads to the stack overflow. The program cannot be finished and the result
// can't be calculated.
