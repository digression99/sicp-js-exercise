import { inc, log } from "../helpers/index.js"

function double(f) {
  return x => f(f(x))
}

log(double(inc)(5))
log(double(double)(inc)(5))
log(double(double(double))(inc)(5)) // 21
