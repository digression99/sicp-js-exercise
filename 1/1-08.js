import { log, abs, sq, cube } from '../helpers/index.js'

let iteration = 0

function cube_improve(guess, x) {
  return (x / sq(guess) + 2 * guess) / 3
}

function is_good_enough(guess, x) {
  return abs(cube(guess) - x) < 0.001
}

function cube_sqrt_iter(guess, x) {
  if (iteration === 100) return 0
  iteration++
  const improved = cube_improve(guess, x)

  return is_good_enough(improved, x)
    ? improved
    : cube_sqrt_iter(improved, x)
}

function cube_sqrt(x) {
  return cube_sqrt_iter(1, x)
}

log(cube_sqrt(1000))
