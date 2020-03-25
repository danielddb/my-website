export enum Breakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export type BreakpointValue<T> = {
  [key in keyof typeof Breakpoints]?: T;
};

export const browserDefaultFontSizePx = 16;

// Breakpoints
export const breakpoints: BreakpointValue<string> = {
  xs: `${576 / browserDefaultFontSizePx}em`,
  sm: `${768 / browserDefaultFontSizePx}em`,
  md: `${992 / browserDefaultFontSizePx}em`,
  lg: `${1200 / browserDefaultFontSizePx}em`
};

// Spacing
export const spacingUnitMajorPx = 16;
export const spacingUnitMinorPx = 8;

// Typography
export const fontFamily = "'Avenir Next', Helvetica, Arial, sans-serif";
export const rootFontSizePx = 18;
export const rootFontScale = 1.25;
