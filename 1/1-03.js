import { log, sq } from '../helpers/index.js'

const answer = (a, b, c) => {
  const [, nm, mx] = [a, b, c].sort()
  return sq(nm) + sq(mx)
}

log(answer(1, 2, 3))
log(answer(3, 2, 1))
log(answer(2, 1, 3))


