import React from 'react';
import styled from 'styled-components';
import Container from './container';
import Logo from './logo';
import MainNavLinks from './main-nav-links';
import { spacingUnitMajorPx } from '../themes/variables';
import { toRem } from '../themes/functions';
import VerticalSpacing from './vertical-spacing';

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavOverflow = styled.div`
  overflow-x: auto;
  margin-left: ${toRem(spacingUnitMajorPx)};
`;

const Navbar = () => (
  <VerticalSpacing as="nav">
    <FlexContainer maxWidth="lg">
      <Logo id="nav-logo" />
      <NavOverflow>
        <MainNavLinks />
      </NavOverflow>
    </FlexContainer>
  </VerticalSpacing>
);

export default Navbar;
