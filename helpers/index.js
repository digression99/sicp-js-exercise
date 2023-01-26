export const log = (...d) => console.log(...d) // helper function

export const sq = (n) => Math.pow(n, 2)

export const cube = (n) => Math.pow(n, 3)

export const abs = (n) => Math.abs(n)

export const isEven = (n) => n % 2 === 0

export const math_floor = (n) => Math.floor(n)

export const math_random = () => Math.random()

export const math_sin = (n) => Math.sin(n)

export const math_cos = (n) => Math.cos(n)

// Math.log returns log_e(n), which is natural log.
export const math_log = (n) => Math.log(n)

export const inc = (n) => n + 1

export const identity = (n) => n

export const add = (a, b) => a + b

export const positive = (n) => n >= 0

export const negative = (n) => n < 0

export const average = (...args) => args.reduce(add) / args.length
