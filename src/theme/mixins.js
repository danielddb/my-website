import { css } from "styled-components"
import { rootLineHeight, breakpoints } from "./theme"
import { toRem, getTypographyConfig } from "./typography"

export const typeColor = css`
  color: ${props => props.theme.text};
`

export const typeFontSize = typographyKey => css`
  font-size: ${toRem(getTypographyConfig(typographyKey).fontSize)};
`

export const typeLineHeight = typographyKey => css`
  line-height: ${toRem(getTypographyConfig(typographyKey).lineHeight)};
`

export const typeMargin = typographyKey => css`
  margin: 0 0 ${toRem(getTypographyConfig(typographyKey).margin)};
`

export const type = typographyKey => css`
  ${typeFontSize(typographyKey)}
  ${typeLineHeight(typographyKey)}
  ${typeMargin(typographyKey)}
`

export const hr = css`
  border: 1px solid;
  margin: ${toRem(rootLineHeight - 1)} 0;
`

export const link = css`
  color: ${props => props.theme.link};
`

export const scale = (step = 1) => toRem(rootLineHeight * step)

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
`

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label] / 16}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
