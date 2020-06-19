import styled from 'styled-components';
import { toRem } from '../themes/functions';
import * as vars from '../themes/variables';

const Caption = styled.p`
  margin: 0;
  font-size: ${toRem(vars.rootFontSizePx)};
  line-height: ${toRem(vars.spacingUnitMajorPx)};
  color: ${props => props.theme.palette.text.secondary};
`;

export default Caption;
