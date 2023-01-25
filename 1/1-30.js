import { cube, log, inc } from "../helpers/index.js"

function sum(term, a, next, b) {
  function iter(a, result) {
    return a > b
      ? result
      : iter(next(a), term(a) + result)
  }
  return iter(a, 0)
}

log(sum(cube, 1, inc, 10))
