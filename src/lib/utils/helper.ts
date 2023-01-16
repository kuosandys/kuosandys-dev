export function pipe<T>(x0: T, ...fns: ((x: T) => T)[]) {
  return fns.reduce((x, f) => f(x), x0);
}
