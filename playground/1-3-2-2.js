import { log, sq } from '../helpers/index.js'

function f(x, y) {
  function f_helper(a, b) {
    return x * sq(a) + y * b + a * b
  }

  return f_helper(1 + x * y, 1 - y)
}

function f_2(x, y) {
  return (
    (a, b) => x * sq(a) + y * b + a * b
  )(1 + x * y, 1 - y)
}

function f_3(x, y) {
  const a = 1 + x * y
  const b = 1 - y
  return x * sq(a) + y * b + a * b
}

log(f(1, 4))
log(f_2(1, 4))
log(f_3(1, 4))
