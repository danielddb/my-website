import React, { FunctionComponent } from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './global-style';
import Theme from './theme';

const Layout: FunctionComponent<{}> = ({ children }) => {
  return (
    <Theme>
      <Normalize />
      <GlobalStyle />
      {children}
    </Theme>
  );
};

export default Layout;
