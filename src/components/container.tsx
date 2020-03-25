import styled from 'styled-components';
import { toRem } from '../themes/functions';
import * as vars from '../themes/variables';
import { respondTo } from '../themes/mixins';

const Container = styled.div<{
  maxWidth?: keyof typeof vars.Breakpoints;
}>`
  margin: 0 auto;
  padding: 0 ${toRem(vars.spacingUnitMajorPx * 1.5)};

  & > :first-child {
    margin-top: 0;
  }

  ${({ maxWidth }) =>
    respondTo[maxWidth]`
      max-width: ${vars.breakpoints[maxWidth]};
    `}
`;

Container.defaultProps = {
  maxWidth: vars.Breakpoints.xs
};

export default Container;
