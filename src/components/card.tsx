import styled from 'styled-components';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';

export const Card = styled.div`
  padding: ${toRem(spacingUnitMajorPx * 2)};
  background ${props => props.theme.palette.background.card};
  border-radius: ${toRem(4)};

  & > :first-child {
    margin-top: 0;
  }
`;

export default Card;
