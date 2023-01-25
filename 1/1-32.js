import { cube, inc, log } from "../helpers/index.js"

// a
function accumulate(combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b))
}

// b
function accumulate_iterative(combiner, null_value, term, a, next, b) {
  function iter(x, result) {
    return x > b
      ? result
      : iter(next(x), combiner(result, term(x)))
  }
  return iter(a, null_value)
}

function add(a, b) {
  return a + b
}

// function sum(term, a, next, b) {
//   return accumulate(add, 0, term, a, next, b)
// }

function sum(term, a, next, b) {
  return accumulate_iterative(add, 0, term, a, next, b)
}

function sum_cubes(a, b) {
  return sum(cube, a, inc, b)
}

log(sum_cubes(1, 10))


