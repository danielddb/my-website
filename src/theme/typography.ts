import { createRemCalc } from '../utils/typography';
import { rootFontSize, rootLineHeight, rootScale } from './theme';

export const toRem = createRemCalc(rootFontSize);

export enum TypographyLevel {
  Root,
  H1,
  H2,
  H3,
  H4
}

export interface TypographyConfig {
  fontSize: number;
  lineHeight: number;
  margin: number;
}

export interface Typography {
  [TypographyLevel.Root]: TypographyConfig;
  [TypographyLevel.H1]: TypographyConfig;
  [TypographyLevel.H2]: TypographyConfig;
  [TypographyLevel.H3]: TypographyConfig;
  [TypographyLevel.H4]: TypographyConfig;
}

export const typography: Typography = {
  [TypographyLevel.Root]: {
    fontSize: rootFontSize,
    lineHeight: rootLineHeight,
    margin: rootLineHeight
  },
  [TypographyLevel.H1]: {
    fontSize: rootFontSize * rootScale * rootScale * rootScale,
    lineHeight: rootLineHeight * 3,
    margin: rootLineHeight
  },
  [TypographyLevel.H2]: {
    fontSize: rootFontSize * rootScale * rootScale,
    lineHeight: rootLineHeight * 2,
    margin: rootLineHeight
  },
  [TypographyLevel.H3]: {
    fontSize: rootFontSize * rootScale,
    lineHeight: rootLineHeight * 2,
    margin: rootLineHeight
  },
  [TypographyLevel.H4]: {
    fontSize: rootFontSize,
    lineHeight: rootLineHeight,
    margin: 0
  }
};

export const getTypographyConfig = (
  typographyLevel: TypographyLevel = TypographyLevel.Root
) => typography[typographyLevel];
