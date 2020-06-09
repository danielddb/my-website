import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';
import { resetTextDecoration } from '../themes/mixins';

const Svg = styled.svg`
  height: ${toRem(spacingUnitMajorPx * 4)};
`;

const Anchor = styled(Link)`
  ${resetTextDecoration}

  display: inline-block;
`;

const HexagonPath = styled.path`
  fill: ${props => props.theme.palette.primary.main};
  transition: transform 500ms ease-in-out;
  transform-origin: 50% 50%;

  ${Anchor}:focus &,
  ${Anchor}:hover & {
    transform: rotate(360deg);
  }
`;

const DPath = styled.path`
  fill: ${props => props.theme.palette.text.primary};
  transition: transform 500ms ease-in-out;
  transform-origin: 50% 50%;
  transform: scale(0.8);

  ${Anchor}:focus &,
  ${Anchor}:hover & {
    transform: scale(0.6);
  }
`;

export const Logo: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Anchor to="/">
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-4 -4.812 320 360"
        overflow="visible"
        aria-labelledby={id}
      >
        <title id={id}>Dan Dawson-Brown Logo</title>
        <DPath d="M255.944 85.702h-98.782l.112.053c-.954-.019-1.898-.053-2.864-.053H90.92v148.755l-34.863 30.216H154.41c56.243 0 92.237-33.541 92.237-89.86 0-26.131-7.76-47.185-21.683-62.261l30.98-26.85zM152.66 227.126h-17.998V123.249h17.998c29.497 0 48.744 17.521 48.744 51.563 0 34.292-18.497 52.314-48.744 52.314z" />
        <HexagonPath d="M156 350.375c-4.661 0-9.156-1.107-12.656-3.119l-130.66-75.092C5.453 268.008 0 258.586 0 250.244V100.129c0-8.34 5.453-17.762 12.684-21.918l130.66-75.092C146.844 1.107 151.338 0 156 0c4.661 0 9.156 1.107 12.656 3.119l130.66 75.092C306.547 82.367 312 91.789 312 100.129v150.115c0 8.342-5.453 17.764-12.684 21.92l-130.66 75.092c-3.5 2.012-7.995 3.119-12.656 3.119zM156 16c-2.182 0-3.85.512-4.684.992l-130.66 75.09C18.35 93.408 16 97.469 16 100.129v150.115c0 2.66 2.35 6.721 4.656 8.047l130.66 75.092c.834.48 2.502.992 4.684.992s3.85-.512 4.684-.992l130.66-75.092c2.307-1.326 4.656-5.387 4.656-8.047V100.129c0-2.66-2.35-6.721-4.656-8.047l-130.66-75.09c-.834-.48-2.503-.992-4.684-.992z" />
      </Svg>
    </Anchor>
  );
};

export default Logo;
