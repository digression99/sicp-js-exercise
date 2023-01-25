import { sq, isEven } from './index.js'

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

export function fast_is_prime(n, times) {
  return times === 0
    ? true
    : fermat_test(n)
      ? fast_is_prime(n, times - 1)
      : false
}

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

export function is_prime(n) {
  return n === smallest_divisor(n)
}
