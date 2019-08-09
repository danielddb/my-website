import { css, ThemedCssFunction } from 'styled-components';
import { breakpoints, rootLineHeight } from './theme';
import { getTypographyConfig, toRem, TypographyLevel } from './typography';

export const typeColor = css`
  color: ${props => props.theme.text};
`;

export const typeFontSize = (typographyLevel?: TypographyLevel) => css`
  font-size: ${toRem(getTypographyConfig(typographyLevel).fontSize)};
`;

export const typeLineHeight = (typographyLevel?: TypographyLevel) => css`
  line-height: ${toRem(getTypographyConfig(typographyLevel).lineHeight)};
`;

export const typeMargin = (typographyLevel?: TypographyLevel) => css`
  margin: 0 0 ${toRem(getTypographyConfig(typographyLevel).margin)};
`;

export const type = (typographyLevel?: TypographyLevel) => css`
  ${typeFontSize(typographyLevel)}
  ${typeLineHeight(typographyLevel)}
  ${typeMargin(typographyLevel)}
`;

export const hr = css`
  border: 1px solid;
  margin: ${toRem(rootLineHeight - 1)} 0;
`;

export const link = css`
  color: ${props => props.theme.link};
`;

export const scale = (step = 1) => toRem(rootLineHeight * step);

export const button = css`
  -webkit-appearance: none;
  background: none;

  color: ${props => props.theme.link};
  border: 2px solid ${props => props.theme.link};

  padding: ${scale(0.5)} ${scale()};
  transition: opacity 300ms ease-in-out;

  :hover,
  :focus {
    opacity: 0.8;
  }
`;

export const respondTo = (Object.keys(breakpoints) as Array<
  keyof typeof breakpoints
>).reduce(
  (accumulator, label) => {
    accumulator[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${breakpoints[label] / 16}em) {
        ${css(first, ...interpolations)};
      }
    `;
    return accumulator;
  },
  {} as { [key in keyof typeof breakpoints]: ThemedCssFunction<{}> }
);
