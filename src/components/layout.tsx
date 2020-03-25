import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Navbar from './navbar';

const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrap>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Wrap>
  );
};

export default Layout;
