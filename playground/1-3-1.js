import { cube, log } from '../helpers/index.js'

function test1() {
  function sum_integers(a, b) {
    return a > b
      ? 0
      : a + sum_integers(a + 1, b)
  }

  function sum_cubes(a, b) {
    return a > b
      ? 0
      : cube(a) + sum_cubes(a + 1, b)
  }

  function pi_sum(a, b) {
    return a > b
      ? 0
      : 1 / (a * (a + 2)) + pi_sum(a + 4, b)
  }


  log(sum_integers(1, 10))
  log(sum_cubes(1, 10))
  log(pi_sum(1, 100))
}

function test2() {
  function sum(term, a, next, b) {
    return a > b
      ? 0
      : term(a) + sum(term, next(a), next, b)
  }

  function inc(n) {
    return n + 1
  }

  function sum_cubes(a, b) {
    return sum(cube, a, inc, b)
  }

  log(sum_cubes(1, 10))

  function identity(x) {
    return x
  }

  function sum_integers(a, b) {
    return sum(identity, a, inc, b)
  }
  log(sum_integers(1, 10))

  function pi_sum(a, b) {
    function pi_term(x) {
      return 1 / (x * (x + 2))
    }

    function pi_next(x) {
      return x + 4
    }

    return sum(pi_term, a, pi_next, b)
  }
  log(8 * pi_sum(1, 1000))
}

function test3() {
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

  log(integral(cube, 0, 1, 0.01))
  log(integral(cube, 0, 1, 0.001))
}

test3()


