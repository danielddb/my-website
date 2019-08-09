export function createRemCalc(baseUnit = 16) {
  return function toRem(pxValue: number) {
    return `${pxValue / baseUnit}rem`;
  };
}
