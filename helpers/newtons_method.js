import { fixed_point } from "./fixed_point.js"

const dx = 0.00001

function deriv(g) {
  return x => (g(x + dx) - g(x)) / dx
}

// if x -> g(x) is differentiable,
// then the root of g(x) = 0 is a fixed point of the function x -> f(x).
// So,
// f(x) = x - g(x) / Dg(x)
function newton_transform(g) {
  return x => x - g(x) / deriv(g)(x)
}

export function newtons_method(g, guess) {
  return fixed_point(newton_transform(g), guess)
}
