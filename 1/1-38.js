import { isEven, log } from "../helpers/index.js"

// continued faction.
function cont_frac(n, d, k) {
  function f(nn, nd, c) {
    if (c === k) return 0
    return nn / (nd + f(n(c + 1), d(c + 1), c + 1))
  }
  return f(n(1), d(1), 1)
}

const n = i => 1
const d = i => {
  return i % 3 === 2
    ? (2 * (i + 1)) / 3
    : 1
}

// e - 2.7182818284590
log(cont_frac(n, d, 100) + 2) // 2.7182818284590455
