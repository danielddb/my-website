import React from "react"
import Band from "./band"
import ButtonLink from "./button-link"
import Container from "./container"

const Contact = () => (
  <Band>
    <Container centerText>
      <ButtonLink
        href="https://www.linkedin.com/in/dandawsonbrown/"
        target="_blank"
      >
        Get in touch
      </ButtonLink>
    </Container>
  </Band>
)

export default Contact
