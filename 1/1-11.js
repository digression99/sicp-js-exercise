import { log } from "../helpers/index.js"

function f_recursive(n) {
  return n < 3
    ? n
    : f_recursive(n - 1) + 2 * f_recursive(n - 2) + 3 * f_recursive(n - 3)
}

function f_iterative(n) {
  if (n < 3) return n
  return f_iter(2, 1, 0, 3, n)
}

function f_iter(r1, r2, r3, c, n) {
  const s = r1 + 2 * r2 + 3 * r3
  if (c === n) return s
  return f_iter(s, r1, r2, c + 1, n)
}

log(f_recursive(5))
log(f_iterative(5))
