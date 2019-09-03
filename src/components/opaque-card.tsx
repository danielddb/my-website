import styled from 'styled-components';
import { scale } from '../theme/mixins';

const OpaqueCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${scale()};
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  > :first-child {
    margin-top: 0 !important;
    margin-left: 0 !important;
  }

  > :last-child {
    margin-bottom: 0 !important;
    margin-right: 0 !important;
  }
`;

export default OpaqueCard;
