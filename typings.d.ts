import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      text: {
        primary: string;
        secondary: string;
      };
      divider: string;
      background: {
        default: string;
        card: string;
      };
      primary: {
        dark: string;
        main: string;
        light: string;
        contrastText: string;
      };
    };
  }
}

declare module '*.gif' {
  const content: string;
  export default content;
}
