import React from "react"
import PropTypes from "prop-types"
import { Normalize } from "styled-normalize"
import GlobalStyle from "./global-style"
import Theme from "./theme"

const Layout = ({ children }) => {
  return (
    <Theme>
      <Normalize />
      <GlobalStyle />
      {children}
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
