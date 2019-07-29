import { createGlobalStyle } from "styled-components"
import * as mixins from "../theme/mixins"
import { typographyKeys } from "../theme/typography"
import { rootFontSize, rootLineHeightScale } from "../theme/theme"
import "../fonts/stylesheet.css"

const GlobalStyle = createGlobalStyle`  
  html {
    box-sizing: border-box;
    font-size: ${(rootFontSize / 16) * 100}%;
    line-height: ${rootLineHeightScale};

    ${mixins.respondTo.md`
      font-size: ${((rootFontSize + 2) / 16) * 100}%;
    `}
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'ars', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, ul, ol, pre, table, blockquote {
    ${mixins.type()}
  }

  h1 {
    ${mixins.type(typographyKeys.h1)}
  }

  h2 {
    ${mixins.type(typographyKeys.h2)}
  }

  h3 {
    ${mixins.type(typographyKeys.h3)}
  }

  h4, h5, h6 {
    ${mixins.type(typographyKeys.h4)}
  }

  hr {
    ${mixins.hr}
  }

  a {
    ${mixins.link}
  }
`

export default GlobalStyle
