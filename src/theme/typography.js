import { rootFontSize, rootLineHeight, rootScale } from "./theme"
import { createRemCalc } from "../utils/typography"

export const toRem = createRemCalc(rootFontSize)

export const typographyKeys = {
  root: "root",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
}

export const typography = {
  [typographyKeys.root]: {
    fontSize: rootFontSize,
    lineHeight: rootLineHeight,
    margin: rootLineHeight,
  },
  [typographyKeys.h1]: {
    fontSize: rootFontSize * rootScale * rootScale * rootScale,
    lineHeight: rootLineHeight * 3,
    margin: rootLineHeight,
  },
  [typographyKeys.h2]: {
    fontSize: rootFontSize * rootScale * rootScale,
    lineHeight: rootLineHeight * 2,
    margin: rootLineHeight,
  },
  [typographyKeys.h3]: {
    fontSize: rootFontSize * rootScale,
    lineHeight: rootLineHeight * 2,
    margin: rootLineHeight,
  },
  [typographyKeys.h4]: {
    fontSize: rootFontSize,
    lineHeight: rootLineHeight,
    margin: 0,
  },
}

export const getTypographyConfig = key => typography[key] || typography.root
