import { log } from "../helpers/index.js"

// O(phi^n)
function fib_recursive(n) {
  return n === 0
    ? 0
    : n === 1
      ? 1
      : fib_recursive(n - 1) + fib_recursive(n - 2)
}

// O(n)
function fib_iterative(n) {
  return fib_iter(1, 0, n);
}

function fib_iter(a, b, count) {
  return count === 0
    ? b
    : fib_iter(a + b, a, count - 1)
}

log(fib_recursive(5))
