import { isEven, log } from "../helpers/index.js"

function times(a, b) {
  return b === 0
    ? 0
    : a + times(a, b - 1)
}

function double(a) {
  return a * 2
}

function halve(a) {
  return a / 2
}

// answer.
function times_fast(a, b) {
  return b === 0
    ? 0
    : isEven(b)
      ? times(double(a), halve(b))
      : a + times(a, b - 1)
}

function test() {
  log(times_fast(2, 100)) // 2 * 100
}

test()

