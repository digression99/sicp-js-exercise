import { sq, log } from "../helpers/index.js"

function compose(f, g) {
  return x => f(g(x))
}

function repeated(f, n) {
  return n <= 1
    ? f
    : repeated(compose(f, f), n - 1)
  // : compose(repeated(f, n - 1), f) - 
}

log(repeated(sq, 2)(5)) // 625
