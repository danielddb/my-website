import React from 'react';
import styled from 'styled-components';
import Container from './container';
import Logo from './logo';
import Band from './band';
import VerticalSpacing from './vertical-spacing';
import { Caption } from './caption';
import MainNavLinks from './main-nav-links';

const FooterBand = styled(Band)`
  text-align: center;
`;

const Footer: React.FC = () => (
  <FooterBand spacing={3}>
    <Container>
      <Logo id="footer-logo" />
      <VerticalSpacing spacing={2}>
        <MainNavLinks />
      </VerticalSpacing>
      <Caption>&copy; Daniel Dawson {new Date().getFullYear()}</Caption>
    </Container>
  </FooterBand>
);

export default Footer;
