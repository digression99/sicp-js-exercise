import { log, sq } from "../helpers/index.js"

function smallest_divisor(n) {
  return find_divisor(n, 2)
}

function find_divisor(n, test_divisor) {
  return sq(test_divisor) > n
    ? n
    : divides(test_divisor, n)
      ? test_divisor
      : find_divisor(n, test_divisor + 1)
}

function divides(a, b) {
  return b % a === 0
}

// answer.
log(smallest_divisor(199)) // 199
log(smallest_divisor(1999)) // 1999
log(smallest_divisor(19999)) // 7

