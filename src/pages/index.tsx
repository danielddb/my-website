import React from 'react';

import SEO from '../components/seo';
import Hero from '../components/hero';
import Container from '../components/container';
import Band from '../components/band';
import Recommendation, {
  RecommendationText
} from '../components/recommendation';
import Heading from '../components/heading';
import VerticalSpacing from '../components/vertical-spacing';
import ButtonLink from '../components/button-link';
import Slider from '../components/slider';
import Timeline, {
  TimelineItem,
  TimelineItemContent
} from '../components/timeline';

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Band spacing={4}>
        <Container maxWidth={'sm'}>
          <Slider
            slides={[
              <Recommendation>
                <RecommendationText>
                  Daniel without a doubt is a front-end developer who's skills
                  are exceptionally rare.
                </RecommendationText>
                <VerticalSpacing spacing={2} topOnly>
                  <ButtonLink
                    primary
                    as="a"
                    href="https://www.linkedin.com/in/dandawsonbrown"
                    target="_blank"
                    rel="noopener"
                  >
                    View on LinkedIn
                  </ButtonLink>
                </VerticalSpacing>
              </Recommendation>,
              <Recommendation>
                <RecommendationText>
                  Instrumental introducing modern technologies and best practice
                  techniques to the Front End team.
                </RecommendationText>
                <VerticalSpacing spacing={2} topOnly>
                  <ButtonLink
                    primary
                    as="a"
                    href="https://www.linkedin.com/in/dandawsonbrown"
                    target="_blank"
                    rel="noopener"
                  >
                    View on LinkedIn
                  </ButtonLink>
                </VerticalSpacing>
              </Recommendation>
            ]}
          />
        </Container>
      </Band>
      <Band spacing={4}>
        <Container maxWidth={'sm'}>
          <Timeline>
            <TimelineItem>
              <TimelineItemContent>
                <Heading as="h5">Vermeg</Heading>
                <Heading as="h6" isSubheading>
                  UI Developer
                </Heading>
                <p>
                  I'm currently responsible for building regulatory reporting
                  and collateral management web applications for Banks with
                  Angular and NGRX.
                </p>
              </TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemContent>
                <Heading as="h5">nPower</Heading>
                <Heading as="h6" isSubheading>
                  Senior UI Developer
                </Heading>
                <p>
                  I primarily helped lead the frontend design system
                  architecture and development of the new npower.com with
                  technologies such as TypeScript, Redux and Sass.
                </p>
              </TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemContent>
                <Heading as="h5">nPower</Heading>
                <Heading as="h6" isSubheading>
                  UI Developer
                </Heading>
                <p>
                  I worked on nPower's online applications such as Online
                  Account Management and Household Comparison using Angular JS.
                </p>
              </TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemContent>
                <Heading as="h5">The Blue Cube</Heading>
                <Heading as="h6" isSubheading>
                  UI Developer &amp; Designer
                </Heading>
                <p>
                  I worked on designing and developing quality and highly
                  maintainable frontend code for responsive PHP content managed
                  and eCommerce websites such as WordPress and Magento.
                </p>
              </TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemContent>
                <Heading as="h5">Class Creative</Heading>
                <Heading as="h6" isSubheading>
                  Web Developer
                </Heading>
                <p>
                  I mainly developed WordPress websites. I even dabbled in some
                  backend work for bespoke solutions with CodeIgniter and MySQL.
                </p>
              </TimelineItemContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </Band>
    </>
  );
};

export default IndexPage;
