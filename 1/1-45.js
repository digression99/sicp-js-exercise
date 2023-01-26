import { fixed_point } from "../helpers/fixed_point.js"
import { average, log } from "../helpers/index.js"

function compose(f, g) {
  return x => f(g(x))
}

function repeated(f, n) {
  return n <= 1
    ? f
    : repeated(compose(f, f), n - 1)
  // : compose(repeated(f, n - 1), f) - 
}

// try 3 times of average_damp.
function average_damp(f) {
  return x => average(x, f(x))
}

function fixed_point_of_transform(g, transform, guess) {
  return fixed_point(transform(g), guess)
}

// average damp
function sqrt(x) {
  return fixed_point_of_transform(
    y => x / y,
    average_damp,
    1
  )
}

// 3 times is enough.
function n_sqrt(x, n) {
  return fixed_point_of_transform(
    y => x / Math.pow(y, n - 1),
    repeated(average_damp, 3),
    1
  )
}

log(n_sqrt(4, 2))
log(n_sqrt(8, 3))
log(n_sqrt(16, 4))
log(n_sqrt(32, 5))
log(n_sqrt(64, 6))
log(n_sqrt(128, 7))
