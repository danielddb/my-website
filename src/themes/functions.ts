import {
  Breakpoints,
  BreakpointValue,
  browserDefaultFontSizePx
} from './variables';

export const getBreakpointValue = <T>(
  breakpoint: keyof typeof Breakpoints,
  breakpointValues: BreakpointValue<T>
) => breakpointValues[breakpoint];

export const toRem = (
  pxValue: number,
  rootFontSizePx: number = browserDefaultFontSizePx
) => `${pxValue / rootFontSizePx}rem`;
