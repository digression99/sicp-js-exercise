import { is_prime } from "../helpers/prime.js"
import { sq, add, inc, log, identity } from '../helpers/index.js'
import { gcd } from '../helpers/gcd.js'

function filtered_accumulate(filter, combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : filter(a)
      ? combiner(term(a), filtered_accumulate(filter, combiner, null_value, term, next(a), next, b))
      : filtered_accumulate(filter, combiner, null_value, term, next(a), next, b)
}

// a
function add_prime_squares(a, b) {
  return filtered_accumulate(
    is_prime,
    add,
    0,
    sq, // square
    a,
    inc,
    b
  )
}

log(add_prime_squares(1, 3))

// b
function add_divisors(n) {
  function is_divisor(x) {
    return gcd(n, x) === 1
  }

  return filtered_accumulate(
    is_divisor,
    add,
    0,
    identity,
    1,
    inc,
    n
  )
}

log(add_divisors(10)) // 1 + 3 + 7 + 9
//
// log(gcd(10, 2))
