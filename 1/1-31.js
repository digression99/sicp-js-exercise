import { isEven, inc, identity, log } from '../helpers/index.js'

function product(term, a, next, b) {
  return a > b
    ? 1
    : term(a) * product(term, next(a), next, b)
}

function product_iterative(term, a, next, b) {
  function iter(x, result) {
    return x > b
      ? result
      : iter(next(x), term(x) * result)
  }
  return iter(a, 1)
}

function factorial(n) {
  return product(identity, 1, inc, n)
}

log(factorial(5))

function pi() {
  function term(x) {
    return isEven(x)
      ? (2 * x) / (2 * x - 1)
      : (2 * x) / (2 * x + 1)
  }
  return product(term, 1, inc, 1000) * 4
}

// TODO - not so accurate.
log(pi())
