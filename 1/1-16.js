import { isEven, log, sq } from "../helpers/index.js";

function fast_expt_recursive(b, n) {
  return n === 0
    ? 1
    : isEven(n)
      ? sq(fast_expt_recursive(b, n / 2))
      : b * fast_expt_recursive(b, n - 1)
}

function fast_expt_iterative(b, n) {
  return fast_expt_iter(1, b, n)
}

function fast_expt_iter(a, b, n) {
  return n === 0
    ? a
    : isEven(n)
      ? fast_expt_iter(a, sq(b), n / 2)
      : fast_expt_iter(a * b, b, n - 1)
}


function test() {
  for (let i = 2; i < 15; ++i) {
    for (let j = 1; j < 15; ++j) {
      if (fast_expt_iterative(i, j) !== fast_expt_recursive(i, j)) {
        log("diff :", i, j)
      }
    }
  }
}

test()
