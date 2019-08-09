import React, { FunctionComponent } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { themes } from '../theme/theme';

interface Props {
  theme: DefaultTheme;
}

const Theme: FunctionComponent<Props> & { defaultProps: Partial<Props> } = ({
  theme,
  children
}) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
);

Theme.defaultProps = {
  theme: themes.light.base
};

export default Theme;
