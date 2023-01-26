import { log, abs } from "../helpers/index.js"

const tolerance = 0.00001

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance
  }

  function try_with(guess) {
    const next = f(guess)

    return close_enough(guess, next)
      ? next
      : try_with(next)
  }
  return try_with(first_guess)
}

function golden_ratio() {
  return fixed_point(x => 1 + 1 / x, 1)
}

log(golden_ratio()) // 1.6180327...

// The golden ratio is a solution of the equation theta^2 = theta + 1
// -> divide both side with theta.
// -> theta = 1 + 1 / theta
