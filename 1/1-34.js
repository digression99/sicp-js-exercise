import { log } from '../helpers/index.js'

function f(g) {
  console.log('g :', g)
  return g(2)
}

// log(f(sq))
// log(f(z => z * (z + 1)))

log(f(f))

// On f(f), function "f" takes the argument "g" as "f",
// calling g(2) successfully.
// Eventually f(2) is called that takes the argument "g" as 2.
// Number 2 is not a function, therefore
// the expression "2()" throws an error that says
// "2" is not a function.

