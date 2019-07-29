import React from "react"
import { ThemeProvider } from "styled-components"
import { themes } from "../theme/theme"

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)

Theme.defaultProps = {
  theme: themes.light.base,
}

export default Theme
