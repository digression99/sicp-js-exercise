import { sq, average, log } from "../helpers/index.js";
import { fixed_point } from "../helpers/fixed_point.js";

function average_damp(f) {
  return x => average(x, f(x))
}

// abstraction of transform
function fixed_point_of_transform(g, transform, guess) {
  return fixed_point(transform(g), guess)
}

// average damp
function sqrt_1(x) {
  return fixed_point_of_transform(
    y => x / y,
    average_damp,
    1
  )
}

log(sqrt_1(4))

function sqrt_2(x) {
  return fixed_point_of_transform(
    y => sq(y) - x,
    newton_transform,
    1
  )
}
