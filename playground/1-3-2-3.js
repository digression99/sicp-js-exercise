import { isEven, log } from "../helpers/index.js"

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : isEven(exp)
      ? (
        expmod(base, exp / 2, m)
        * expmod(base, exp / 2, m)) % m
      : (base * expmod(base, exp - 1, m)) % m
}

function expmod(base, exp, m) {
  if (exp === 0) {
    return 1
  } else {
    if (isEven(exp)) {
      const half_exp = expmod(base, exp / 2, m)
      return (half_exp * half_exp) % m
    }
    return (base * expmod(base, exp - 1, m)) % m
  }
}

log(expmod(4, 10, 10))
