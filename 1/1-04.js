import { log } from '../helpers/index.js'

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

log(a_plus_abs_b(1, 2) === a_plus_abs_b(1, -2))

// A function a_plus_abs_b follows the applicative-order evaluation method.
// That means the interpreter calculates "b >= 0" first to determine
// the result of ternary operation.
// The expression "b >= 0 ? plus : minus" then is substituted to the proper
// function name between "plus" and "minus".
// Finally, the arguments "(a, b)" is applied to the function to
// get the final result.
