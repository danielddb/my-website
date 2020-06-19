import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar';
import Band from './band';
import Container from './container';
import Heading from './heading';
import { GatsbyImageProps } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export interface Props {
  title?: string;
  subtitle?: string;
  avatar?: typeof Avatar;
}

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DefaultHeroAvatar: React.FC<GatsbyImageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 112, height: 112) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Avatar
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="Dan Dawson-Brown - UI Developer from Brum"
    />
  );
};

const Hero: React.FC<Props> = ({
  title = 'UI Developer from Brum',
  subtitle = 'I currently build financial web apps for Vermeg',
  avatar = <DefaultHeroAvatar />
}) => (
  <Band spacing={4}>
    <Container maxWidth={'md'}>
      <HeroContent>
        {avatar}
        <Heading as="h1">{title}</Heading>
        <Heading as="h2" variant="h3" isSubheading>
          {subtitle}
        </Heading>
      </HeroContent>
    </Container>
  </Band>
);

export default Hero;
