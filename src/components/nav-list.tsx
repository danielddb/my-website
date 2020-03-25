import styled from 'styled-components';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';

const NavList = styled.ul`
  display: inline-flex;
  align-items: center;
  margin: 0 0 0 ${toRem(spacingUnitMajorPx * -2)};
  padding: 0;
  list-style: none;
`;

export const NavListItem = styled.li`
  line-height: ${toRem(spacingUnitMajorPx)};
  padding-left: ${toRem(spacingUnitMajorPx * 2)};
`;

export default NavList;
