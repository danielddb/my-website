import React from 'react';

import Band from '../components/band';
import Container from '../components/container';
import Heading from '../components/heading';
import SEO from '../components/seo';
import VerticalSpacing from '../components/vertical-spacing';
import styled from 'styled-components';
import { respondTo } from '../themes/mixins';
import catGif from '../images/awkward-cat.gif';

const Image = styled.img`
  width: 100%;

  ${respondTo.xs`
    width: auto;
  `}
`;

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <Band spacing={4}>
      <Container maxWidth={'sm'}>
        <Heading as="h1">Awkward...</Heading>
        <Heading as="h2" variant="h4" isSubheading>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Heading>
        <VerticalSpacing spacing={2} topOnly>
          <Image src={catGif} alt="Cat with an awkward expression" />
        </VerticalSpacing>
      </Container>
    </Band>
  </>
);

export default NotFoundPage;
