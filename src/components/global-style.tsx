import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '../fonts/stylesheet.css';
import * as mixins from '../themes/mixins';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    ${mixins.html}
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html, body {
    overflow-x:hidden 
  }

  h1 {
   ${mixins.h1}
  }

  h2 {
    ${mixins.h2}
  }

  h3 {
    ${mixins.h3}
  }

  h4 {
    ${mixins.h4}
  }

  h5 {
    ${mixins.h5}
  }

  h6 {
    ${mixins.h6}
  }

  p {
    ${mixins.p}
  }

  a {
    color: ${props => props.theme.palette.primary.light};
    text-decoration: none;
    display: inline-block;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  pre {
    ${mixins.pre}
  }

  pre, code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  ul {
    ${mixins.p}
  }
`;

export default GlobalStyle;
