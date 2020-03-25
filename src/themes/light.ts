import { DefaultTheme } from 'styled-components';
import * as colors from './colors';

const theme: DefaultTheme = {
  palette: {
    text: {
      primary: colors.black,
      secondary: colors.gray50
    },
    divider: colors.gray90,
    background: {
      default: colors.white,
      card: colors.gray90
    },
    primary: {
      dark: colors.purple20,
      main: colors.purple30,
      light: colors.purple40,
      contrastText: colors.white
    }
  }
};

export default theme;
