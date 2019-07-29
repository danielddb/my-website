import styled from "styled-components"
import * as mixins from "../theme/mixins"

const Band = styled.section`
  padding: ${mixins.scale(2)} 0;
  overflow-x: hidden;
  background: ${props =>
    !props.alternate
      ? props.theme.background
      : props.theme.backgroundAlternate};

  ${mixins.typeColor}

  a {
    ${mixins.link}
  }
`

export default Band
