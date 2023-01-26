import { sq, abs, average, log, math_sin, math_cos } from "../helpers/index.js"

function iterative_improve(good_enough, improve) {
  return function iter(x) {
    const next = improve(x)
    return good_enough(x, next) ? x : iter(next)
  }
}

// 1.1.7 sqrt.
function sqrt(x) {
  function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
      ? guess
      : sqrt_iter(improve(guess, x), x)
  }

  function improve(guess, x) {
    return average(guess, x / guess)
  }

  function is_good_enough(guess, x) {
    return abs(sq(guess) - x) < 0.001
  }

  return sqrt_iter(1, x)
}


function iterative_improve_sqrt(x) {
  function is_good_enough(x, next) {
    return abs(x - next) < 0.001
  }

  function improve(n) {
    return average(n, x / n)
  }

  return iterative_improve(is_good_enough, improve)(1)
}

// log(sqrt(4))
log(iterative_improve_sqrt(4))
// 1.3.3. fixed_point
const tolerance = 0.00001
function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) / tolerance
  }

  function try_with(guess) {
    const next = f(guess)
    return close_enough(guess, next) ? next : try_with(next)
  }
  return try_with(first_guess)
}

function iterative_improve_fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance
  }

  function improve(n) {
    return f(n)
  }
  return iterative_improve(close_enough, improve)(first_guess)
}

log(iterative_improve_fixed_point(y => math_sin(y) + math_cos(y), 1))
