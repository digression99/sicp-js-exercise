import { math_floor, math_random, isEven, log, sq } from '../helpers/index.js'

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

function is_prime(n) {
  return n === smallest_divisor(n)
}

// fermats little theorem
// the reason we put % m is that the number goes too big if without it.
function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : isEven(exp) // fast_expt
      ? sq(expmod(base, exp / 2, m)) % m
      : (base * expmod(base, exp - 1, m)) % m
}

function fermat_test(n) {
  function try_it(a) {
    return expmod(a, n, n) === a
  }
  return try_it(1 + math_floor(math_random() * (n - 1)))
}

function fast_is_prime(n, times) {
  return times === 0
    ? true
    : fermat_test(n)
      ? fast_is_prime(n, times - 1)
      : false
}

function test() {
  log(is_prime(11))
  log(is_prime(13))
  log(is_prime(14))
  log(is_prime(173))
}

function test2() {
  // log(expmod(2, 10, 10))
  // log(fermat_test(11))
  log(fast_is_prime(19876123891231, 100))
  // log(fast_is_prime(11))
  // log(fast_is_prime(13))
  // log(fast_is_prime(14))
  // log(fast_is_prime(173))
}

test2()
