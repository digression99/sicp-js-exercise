import { sq, log } from "../helpers/index.js"

// continued faction.
function cont_frac(n, d, k) {
  function f(nn, nd, c) {
    if (c === k) return 0
    return nn / (nd + f(n(c + 1), d(c + 1), c + 1))
  }
  return f(n(1), d(1), 1)
}

function tan_cf(x, k) {
  return cont_frac(
    i => i === 1 ? x : -sq(x),
    i => 2 * i - 1,
    k
  )
}

log(tan_cf(10, 100)) // 0.648360
log(Math.tan(10)) // 0.648360
