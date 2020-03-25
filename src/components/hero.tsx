import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar';
import Band from './band';
import Container from './container';
import Heading from './heading';

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Hero: React.FC = () => (
  <Band spacing={4}>
    <Container maxWidth={'md'}>
      <HeroContent>
        <Avatar />
        <Heading as="h1">UI Developer from Brum</Heading>
        <Heading as="h2" variant="h3" isSubheading>
          I currently build financial web apps for Vermeg
        </Heading>
      </HeroContent>
    </Container>
  </Band>
);

export default Hero;
