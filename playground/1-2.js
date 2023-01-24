import { log } from "../helpers/index.js"

function factorial_recursive(n) {
  return n === 1 ? 1 : n * factorial_recursive(n - 1);
}

function factorial_iterative(n) {
  return fact_iter(1, 1, n)
}

// @tailrec - scala
function fact_iter(product, counter, max_count) {
  log(product, counter, max_count)
  return counter > max_count ? product
    : fact_iter(counter * product, counter + 1, max_count)
}

// log(factorial_recursive(5))
log(factorial_iterative(6))
