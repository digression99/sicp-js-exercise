import { isEven, log, sq } from "../helpers/index.js"

function expt_recursive(b, n) {
  return n === 0
    ? 1
    : b * expt_recursive(b, n - 1)
}

function expt_iterative(b, n) {
  return expt_iter(b, n, 1)
}

function expt_iter(b, counter, product) {
  return counter === 0
    ? product
    : expt_iter(b, counter - 1, b * product)
}

function fast_expt(b, n) {
  return n === 0
    ? 1
    : isEven(n)
      ? sq(fast_expt(b, n / 2))
      : b * fast_expt(b, n - 1)
}

log(fast_expt(2, 10))
