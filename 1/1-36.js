import { log, abs, math_log, average } from "../helpers/index.js"

const tolerance = 0.00001

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance
  }

  function try_with(guess, step) {
    const next = f(guess)
    console.log('next guess : ', step, next)

    return close_enough(guess, next)
      ? next
      : try_with(next, step + 1)
  }

  return try_with(first_guess, 1)
}

log(fixed_point(
  x => math_log(1000) / math_log(x),
  2
)) // 34 step, 4.555532270803653

log(
  fixed_point(
    x => average(x, math_log(1000) / math_log(x)),
    2
  )
) // 9 step, same answer.

