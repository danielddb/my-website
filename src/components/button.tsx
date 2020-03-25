import React from 'react';
import styled from 'styled-components';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';
import { Link } from 'gatsby';
import { resetTextDecoration } from '../themes/mixins';

export const Button = styled.button<{ primary?: boolean }>`
  ${resetTextDecoration}

  -webkit-appearance: none;

  display: inline-block;
  position: relative;
  padding: ${toRem(spacingUnitMajorPx)} ${toRem(spacingUnitMajorPx * 2)};
  border-radius: ${toRem(4)};
  cursor: pointer;
  background: ${props =>
    props.primary ? props.theme.palette.primary.main : 'none'};
  color: ${props =>
    props.primary
      ? props.theme.palette.primary.contrastText
      : props.theme.palette.text.primary};
  border: ${toRem(3)} solid
    ${props =>
      props.primary ? 'transparent' : props.theme.palette.text.primary};
  transition: all 200ms ease-in-out;
  line-height: ${toRem(spacingUnitMajorPx)};
  font-weight: bold;
  text-align: center;

  &:focus,
  &:hover {
    background: ${props =>
      props.primary ? props.theme.palette.primary.light : 'none'};
  }

  &:active {
    background: ${props =>
      props.primary ? props.theme.palette.primary.dark : 'none'};
  }
`;

Button.defaultProps = {
  primary: false
};

export default Button;
