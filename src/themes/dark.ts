import { DefaultTheme } from 'styled-components';
import * as colors from './colors';

const theme: DefaultTheme = {
  palette: {
    text: {
      primary: colors.white,
      secondary: colors.gray50
    },
    divider: colors.gray10,
    background: {
      default: colors.black,
      card: colors.gray10
    },
    primary: {
      dark: colors.purple70,
      main: colors.purple80,
      light: colors.purple90,
      contrastText: colors.black
    }
  }
};

export default theme;
