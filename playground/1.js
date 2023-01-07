import { log, sq, abs } from '../helpers/index.js'

function average(x, y) {
  return (x + y) / 2;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function is_good_enough(guess, x) {
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

// log(sqrt(3))
// log(sqrt(9))
// log(sqrt(100 + 37))
// log(sqrt(sqrt(2) + sqrt(3)))
// log(sqrt(sqrt(1000)))

// block structure - 1

/*
function sqrt(x) {
  function is_good_enough(guess, x) {
    return abs(sq(guess) - x) < 0.001;
  }

  function improve(guess, x) {
    return average(guess, x / guess)
  }

  function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
      ? guess
      : sqrt_iter(improve(guess, x), x)
  }

  return sqrt_iter(1, x);
}
*/

// block structure - 2, lexical scoping
function sqrt(x) {
  function is_good_enough(guess) {
    return abs(sq(guess) - x) < 0.001;
  }

  function improve(guess) {
    return average(guess, x / guess)
  }

  function sqrt_iter(guess) {
    return is_good_enough(guess)
      ? guess
      : sqrt_iter(improve(guess))
  }
  return sqrt_iter(1)
}


