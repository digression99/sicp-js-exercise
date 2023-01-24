import { log, abs, sq } from '../helpers/index.js'

function average(x, y) {
  return (x + y) / 2;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function is_good_enough(guess, x) {
  console.log('is good enough', guess, x)
  return abs(sq(guess) - x) < 0.001;
}

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x)
  ? guess
    : sqrt_iter(improve(guess, x), x)
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

function conditional(predicate, then_clause, else_clause) {
  console.log('conditional')
  return predicate ? then_clause : else_clause;
}

function sqrt_iter2(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter2(improve(guess, x), x)
  )
}

function sqrt2(x) {
  return sqrt_iter2(1, x)
}


log(conditional(2 === 3, 0, 5))
log(conditional(1 === 1, 0, 5))
log(sqrt2(3))

//
// There is a recursive expression calling "sqrt_iter" on the function application expression
// "conditional(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x))".
// This expression triggers the stack overflow that prevents the program from
// calculating the correct result.

