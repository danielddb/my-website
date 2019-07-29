import styled from "styled-components"
import { scale } from "../theme/mixins"
import { breakpoints } from "../theme/theme"
import { toRem } from "../theme/typography"

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 ${scale()};
  max-width: ${toRem(breakpoints.sm)};

  ${props => props.centerText && `text-align: center;`}
`

export default Container
