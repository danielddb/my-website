import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';
import { toRem } from './functions';
import * as vars from './variables';

export const respondTo: {
  [key in keyof typeof vars.Breakpoints]: ThemedCssFunction<DefaultTheme>;
} = Object.keys(vars.breakpoints).reduce<any>((accumulator, label) => {
  accumulator[label] = (first, ...interpolations) => css`
    @media (min-width: ${vars.breakpoints[label]}) {
      ${css(first, ...interpolations)};
    }
  `;
  return accumulator;
}, {});

export const html = css`
  box-sizing: border-box;
  font-family: ${vars.fontFamily};
  font-size: 100%;
  color: ${props => props.theme.palette.text.primary};
  background: ${props => props.theme.palette.background.default};
`;

export const headingMargin = css`
  margin: ${toRem(vars.spacingUnitMajorPx * 2)} 0 0;

  ${respondTo.md`
    margin: ${toRem(vars.spacingUnitMajorPx * 3)} 0 0;
  `}
`;

export const h1 = css`
  ${headingMargin}

  font-size: ${toRem(
    vars.rootFontSizePx *
      vars.rootFontScale *
      vars.rootFontScale *
      vars.rootFontScale *
      vars.rootFontScale
  )};
  line-height: ${toRem(vars.spacingUnitMajorPx * 3)};
  
  ${respondTo.md`
    font-size: ${toRem(
      vars.rootFontSizePx *
        vars.rootFontScale *
        vars.rootFontScale *
        vars.rootFontScale *
        vars.rootFontScale *
        vars.rootFontScale
    )};
    line-height: ${toRem(vars.spacingUnitMajorPx * 4)};
  `}
`;

export const h2 = css`
  ${headingMargin}

  font-size: ${toRem(
    vars.rootFontSizePx *
      vars.rootFontScale *
      vars.rootFontScale *
      vars.rootFontScale
  )};
  line-height: ${toRem(vars.spacingUnitMajorPx * 3)};

  ${respondTo.md`
    font-size: ${toRem(
      vars.rootFontSizePx *
        vars.rootFontScale *
        vars.rootFontScale *
        vars.rootFontScale *
        vars.rootFontScale
    )};
  `}
`;

export const h3 = css`
  ${headingMargin}

  font-size: ${toRem(
    vars.rootFontSizePx * vars.rootFontScale * vars.rootFontScale
  )};
  line-height: ${toRem(vars.spacingUnitMajorPx * 2)};

  ${respondTo.md`
    font-size: ${toRem(
      vars.rootFontSizePx *
        vars.rootFontScale *
        vars.rootFontScale *
        vars.rootFontScale
    )};
    line-height: ${toRem(vars.spacingUnitMajorPx * 3)};
  `}
`;

export const h4 = css`
  ${headingMargin}

  font-size: ${toRem(vars.rootFontSizePx * vars.rootFontScale)};
  line-height: ${toRem(vars.spacingUnitMajorPx * 2)};

  ${respondTo.md`
    font-size: ${toRem(
      vars.rootFontSizePx * vars.rootFontScale * vars.rootFontScale
    )};
  `}
`;

export const h5 = css`
  ${headingMargin}

  font-size: ${toRem(vars.rootFontSizePx * vars.rootFontScale)};
  line-height: ${toRem(vars.spacingUnitMajorPx * 2)};
`;

export const h6 = css`
  ${headingMargin}

  font-size: ${toRem(vars.rootFontSizePx)};
  line-height: ${toRem(vars.spacingUnitMajorPx * 2)};
`;

export const p = css`
  font-size: ${toRem(vars.rootFontSizePx)};
  line-height: ${toRem(vars.spacingUnitMajorPx * 2)};
  margin: ${toRem(vars.spacingUnitMajorPx)} 0 0;
`;

export const pre = css`
  ${p}
`;

export const resetTextDecoration = css`
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
