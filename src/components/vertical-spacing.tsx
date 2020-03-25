import styled from 'styled-components';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';

const VerticalSpacing = styled.div<{ spacing?: number; topOnly?: boolean }>`
  padding: ${props =>
    `${toRem(spacingUnitMajorPx * props.spacing)} 0 ${
      props.topOnly ? '0' : ''
    };`}

  & > :first-child {
    margin-top: 0;
  }
`;

VerticalSpacing.defaultProps = {
  spacing: 1,
  topOnly: false
};

export default VerticalSpacing;
