import styled from "styled-components"
import * as mixins from "../theme/mixins"

const ButtonLink = styled.a`
  ${mixins.button}

  display: inline-block;
  text-decoration: none;
`

export default ButtonLink
