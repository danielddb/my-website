import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePrefersDarkMode from '../hooks/use-prefers-dark-mode';
import light from '../themes/light';
import dark from '../themes/dark';
import GlobalStyle from './global-style';

const Theme: React.FC = ({ children }) => {
  const prefersDarkMode = usePrefersDarkMode();
  const [theme, setTheme] = React.useState(dark);

  React.useEffect(() => {
    setTheme(prefersDarkMode ? dark : light);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
