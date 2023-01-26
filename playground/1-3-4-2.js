import { fixed_point } from "../helpers/fixed_point.js"
import { cube, log, sq } from "../helpers/index.js"

const dx = 0.00001

function deriv(g) {
  return x => (g(x + dx) - g(x)) / dx
}

// log(deriv(cube)(4)) // 3 * 4^2 
// log(deriv(cube)(5)) // 3 * 5^2 

// if x -> g(x) is differentiable,
// then the root of g(x) = 0 is a fixed point of the function x -> f(x).
// So,
// f(x) = x - g(x) / Dg(x)
function newton_transform(g) {
  return x => x - g(x) / deriv(g)(x)
}

function newtons_method(g, guess) {
  return fixed_point(newton_transform(g), guess)
}

// 0 = y^2 - x
// -> find the zero point.
// y -> y^2 - x
function sqrt(x) {
  return newtons_method(y => sq(y) - x, 1)
}

log(sqrt(4))
