import styled, { css } from 'styled-components';
import * as mixins from '../themes/mixins';

const Heading = styled.div<{
  variant?: string;
  isSubheading?: boolean;
  as?: string;
}>`
  ${({ variant: level, as }) => {
    switch (level || as) {
      case 'h1':
        return mixins.h1;
      case 'h2':
        return mixins.h2;
      case 'h3':
        return mixins.h3;
      case 'h4':
        return mixins.h4;
      case 'h5':
        return mixins.h5;
      case 'h6':
      default:
        return mixins.h6;
    }
  }}

  ${({ isSubheading }) =>
    isSubheading &&
    css`
      margin-top: 0 !important;
      color: ${props => props.theme.palette.text.secondary};
      font-weight: normal;
    `}
`;

export default Heading;
