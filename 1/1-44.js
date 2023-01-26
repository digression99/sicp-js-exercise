import { cube, average, log } from "../helpers/index.js";

function compose(f, g) {
  return x => f(g(x))
}

function repeated(f, n) {
  return n <= 1
    ? f
    : repeated(compose(f, f), n - 1)
  // : compose(repeated(f, n - 1), f) - 
}

function smooth(f) {
  const dx = 0.00001
  return x => average(f(x - dx), f(x), f(x + dx))
}

function n_smooth(f, n) {
  return repeated(smooth, n)(f)
}

log(n_smooth(cube, 2)(4))
