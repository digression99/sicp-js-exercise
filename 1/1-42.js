import { sq, inc, log } from "../helpers/index.js"

function compose(f, g) {
  return x => f(g(x))
}

log(compose(sq, inc)(6))
