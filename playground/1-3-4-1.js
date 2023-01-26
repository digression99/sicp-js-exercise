import { fixed_point } from '../helpers/fixed_point.js'
import { average, log, sq } from '../helpers/index.js'

function average_damp(f) {
  return x => average(x, f(x))
}

log(average_damp(sq)(10))

function sqrt(x) {
  return fixed_point(average_damp(y => x / y), 1)
}

log(sqrt(4))

function cube_root(x) {
  return fixed_point(average_damp(y => x / sq(y)), 1)
}

log(cube_root(8))
