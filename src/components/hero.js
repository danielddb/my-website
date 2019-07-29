import React from "react"
import styled from "styled-components"
import Band from "./band"
import Container from "./container"
import WorkspaceSvg from "./workspace-full"
import * as mixins from "../theme/mixins"
import { typographyKeys, toRem } from "../theme/typography"

const HeroContainer = styled(Container)`
  max-width: ${toRem(1200)};
`

const HeroP = styled.p`
  ${mixins.typeFontSize(typographyKeys.h3)}
  ${mixins.typeLineHeight(typographyKeys.h3)}
`

const HeroSpan = styled.span`
  color: ${props => props.theme.link};
`

const HeroSvg = styled(WorkspaceSvg)`
  width: 100%;
  height: auto;
`

const Hero = () => (
  <Band>
    <HeroContainer centerText>
      <div>
        <h1>
          Hi, I’m <HeroSpan>Dan</HeroSpan>.
        </h1>
        <HeroP>
          I’m a <HeroSpan>UI Developer</HeroSpan> from Birmingham specialising
          in React and Angular.
        </HeroP>
      </div>
      <div>
        <HeroSvg />
      </div>
    </HeroContainer>
  </Band>
)

export default Hero
