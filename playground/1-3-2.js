import { cube, log } from '../helpers/index.js'
import { sum } from '../helpers/sum.js'

function pi_sum(a, b) {
  return sum(
    x => 1 / (x * (x + 2)),
    a,
    x => x + 4,
    b
  )
}

log(pi_sum(1, 100))

function integral(f, a, b, dx) {
  return sum(
    f,
    a + dx / 2,
    x => x + dx,
    b
  ) * dx
}

log(integral(cube, 1, 4, 0.1))



