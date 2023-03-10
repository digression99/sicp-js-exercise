import { abs } from './index.js'

const tolerance = 0.00001

export function fixed_point(f, first_guess) {
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

export function fixed_point_of_transform(g, transform, guess) {
  return fixed_point(transform(g), guess)
}
