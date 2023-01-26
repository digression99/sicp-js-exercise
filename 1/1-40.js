import { cube, log, sq } from "../helpers/index.js";
import { newtons_method } from "../helpers/newtons_method.js";

function cubic(a, b, c) {
  return x => cube(x) + a * sq(x) + b * x + c
}

const a = 1
const b = 2
const c = 3

log(newtons_method(cubic(a, b, c), 1)) // -1.275
