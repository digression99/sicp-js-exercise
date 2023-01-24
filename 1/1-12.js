import { log } from "../helpers/index.js"

// pascal's triangle
function pascal(n) {
  if (n === 1) return [1]
  if (n === 2) return [[1], [1, 1]]
  return pascal_iter([[1], [1, 1]], 2, n)
}

function pascal_iter(a, c, n) {
  if (c === n) return a
  const la = a[a.length - 1]
  const na = []
  for (let i = 0; i < la.length - 1; ++i) na.push(la[i] + la[i + 1])
  return pascal_iter([...a, [1, ...na, 1]], c + 1, n)
}

function r(col, n) {
  r(1, n) = r(0, n - 1) + r(1, n - 1)
  return [r(0, n - 1), r(1, n - 1), ..., r(n - 1)]

  // tree
  // 1 
  // 1 0 1
  // 1 2 1
  // 1 3 3 1
  // 1 4 6 4 1
}

log(pascal(5))


