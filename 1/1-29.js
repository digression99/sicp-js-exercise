import { cube, isEven, log } from "../helpers/index.js"

function sum(term, a, next, b) {
  return a > b
    ? 0
    : term(a) + sum(term, next(a), next, b)
}

function integral(f, a, b, dx) {
  function add_dx(x) {
    return x + dx
  }

  return sum(f, a + dx / 2, add_dx, b) * dx
}

function inc(x) {
  return x + 1
}

function simpson(f, a, b, n) {
  const h = (b - a) / n

  function yk(k) {
    const v = f(a + k * h)
    return k === 0 || k === n ? v
      : isEven(k)
        ? 2 * v
        : 4 * v
  }

  return (h / 3) * sum(yk, 0, inc, n)
}

log(integral(cube, 0, 1, 0.001))
log(simpson(cube, 0, 1, 100))



