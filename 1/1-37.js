import { log } from "../helpers/index.js"

// continued faction.
function cont_frac(n, d, k) {
  function f(nn, nd, c) {
    if (c === k) return 0
    return nn / (nd + f(n(c + 1), d(c + 1), c + 1))
  }
  return f(n(1), d(1), 1)
}

// a
// 1 / theta = 1 / 1.6180327 = 0.6180344...
// log(cont_frac(i => 1, i => 1, 10)) // 0.6181818
// log(cont_frac(i => 1, i => 1, 11)) // 0.6179
// log(cont_frac(i => 1, i => 1, 12)) // 0.61805555
// log(cont_frac(i => 1, i => 1, 13)) // 0.61805555
// log(cont_frac(i => 1, i => 1, 100))
// log(cont_frac(i => 1, i => 1, 1000))

// b
function cont_frac_iter(n, d, k) {
  function iter(c, r) {
    if (c === k) return r

    return iter(
      c + 1,
      n(c + 1) / (d(c + 1) + r)
    )
  }

  return iter(1, n(1) / d(1))
}

log(cont_frac_iter(i => 1, i => 1, 11))
