import styled from 'styled-components';
import VerticalSpacing from './vertical-spacing';

export const Band = styled(VerticalSpacing)`
  border-top: 1px solid ${props => props.theme.palette.divider};
`;

export default Band;
