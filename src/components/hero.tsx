import React from 'react';
import styled from 'styled-components';
import * as mixins from '../theme/mixins';
import { toRem, TypographyLevel } from '../theme/typography';
import Band from './band';
import Container from './container';
import WorkspaceSvg from './workspace-full';

const HeroContainer = styled(Container)`
  max-width: ${toRem(1200)};
`;

const HeroP = styled.p`
  ${mixins.typeFontSize(TypographyLevel.H3)}
  ${mixins.typeLineHeight(TypographyLevel.H3)}
`;

const HeroSpan = styled.span`
  color: ${props => props.theme.link};
`;

const HeroSvg = styled(WorkspaceSvg)`
  width: 100%;
  height: auto;
`;

const Hero = () => (
  <Band>
    <HeroContainer centerText={true}>
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
);

export default Hero;
