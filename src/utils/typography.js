export function createRemCalc(baseUnit = 16) {
  return function toRem(pxValue) {
    return `${pxValue / baseUnit}rem`
  }
}
