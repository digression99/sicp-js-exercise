import { log, abs, sq } from '../helpers/index.js'

let iteration = 0

function average(x, y) {
  return (x + y) / 2;
}

function improve(guess, x) {
  log('[improve] guess, x', guess, x, x / guess)
  return average(guess, x / guess);
}

function is_good_enough(guess, x) {
  return abs(sq(guess) - x) < 0.001;
}

function updated_is_good_enough(improved, guess) {
  console.log('is good enough2', improved, guess)
  return abs(improved - guess) < 0.001
}

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x)
  ? guess
    : sqrt_iter(improve(guess, x), x)
}

function sqrt_iter2(guess, x) {
  const improved = improve(guess, x)
  return updated_is_good_enough(improved, guess) ? improved : sqrt_iter2(improved, x)
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

function sqrt2(x) {
  return sqrt_iter2(1, x);
}

// log(sqrt(100000000000000000000000000000)) // fails.
// log(sqrt(0.0001)) // fails.

// log(sqrt2(100000000000000000000000000000)) // succeeds.
log(sqrt2(0.0000001)) // succeeds.

// If we pass the value over 1e+29, the sqrt function falls into the infinite loop.
// This happens because it vibrates on calculating the average of guess and x / guess.
// Meanwhile, if we pass the value smaller than 1e-4, the sqrt function fails to
// calculate the correct result, because the "guess" value cannot be measured small than
// "0.001".
// We can design the "updated_is_good_enough" function by determining the difference
// between "average(guess, x / guess)" and "guess". This works better on the two error
// cases in "sqrt" function, since it stops when the value that is proper enough to change
// is calculated.



