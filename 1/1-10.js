import { log } from '../helpers/index.js'

// Ackermann's function
function A(x, y) {
  return y === 0
    ? 0
    : x === 0
      ? 2 * y
      : y === 1
        ? 2
        : A(x - 1, A(x, y - 1))
}

log(A(1, 10)) // 1024
log(A(2, 4)) // 65536
log(A(3, 3)) // 65536

function f(n) { // 2 * n
  return A(0, n)
}

function g(n) { // 2^n
  return A(1, n)
}

function h(n) { // h(n) = 2^h(n-1)
  return A(2, n)
}

function k(n) { // k(n) = 5n^2
  return 5 * n * n;
}

log(A(2, 1))
log(A(2, 2))
log(A(2, 3))
log(A(2, 4))

