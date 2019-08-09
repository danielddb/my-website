import React from 'react';
import styled from 'styled-components';
import { typeMargin } from '../theme/mixins';
import { themes } from '../theme/theme';
import Band from './band';
import ButtonLink from './button-link';
import Carousel, { CarouselItem } from './carousel';
import Container from './container';
import { IconDictionary } from './icon';
import IconHeader from './icon-header';
import Theme from './theme';

const RecommendationsCarousel = styled(Carousel)`
  ${typeMargin()}
`;

const Recommendations = () => (
  <Theme theme={themes.light.accent}>
    <Band>
      <Container centerText={true}>
        <IconHeader name={IconDictionary.Recommendations} />
        <RecommendationsCarousel>
          <CarouselItem>
            Daniel without a doubt is a front-end developer whose skills are
            exceptionally rare, the level of knowledge he has is incredible and
            is more that happy to distribute this with his colleagues. He has
            fantastic work ethic and quality and is always striving to improve.
            It has been a great pleasure to have been able to work alongside him
            and to also learn from him and would recommend him for any project
            that needs a talented front-end developer.
          </CarouselItem>
          <CarouselItem>
            I worked with Dan over a 2 year period at npower. During this time
            Dan proved himself to be technically excellent and was instrumental
            introducing modern technologies and best practice techniques to the
            Front End team. I would have no hesitation in recommending Dan to
            any future employer and he would be an asset to any project that he
            worked on.
          </CarouselItem>
        </RecommendationsCarousel>
        <ButtonLink
          href="https://www.linkedin.com/in/dandawsonbrown/"
          target="_blank"
        >
          View on LinkedIn
        </ButtonLink>
      </Container>
    </Band>
  </Theme>
);

export default Recommendations;
