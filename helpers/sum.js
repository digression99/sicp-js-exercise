import { add } from '../helpers/index.js'

function accumulate_iterative(
  combiner,
  null_value,
  term,
  a,
  next,
  b
) {
  function iter(x, result) {
    return x > b
      ? result
      : iter(next(x), combiner(result, term(x)))
  }

  return iter(a, null_value)
}

export function sum(term, a, next, b) {
  return accumulate_iterative(add, 0, term, a, next, b)
}
