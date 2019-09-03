import React, { useState } from 'react';
import styled from 'styled-components';
import * as mixins from '../theme/mixins';
import { themes } from '../theme/theme';
import Band from './band';
import Carousel, { CarouselItem } from './carousel';
import Container from './container';
import { IconDictionary } from './icon';
import Icon from './icon';
import IconButton from './icon-button';
import OpaqueCard from './opaque-card';
import Theme from './theme';

const Tabs = styled.div`
  overflow: auto;
  padding: ${mixins.scale()};

  > div {
    display: inline-grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-column-gap: ${mixins.scale()};
  }
`;

const TabItem = styled.div<{ active: boolean }>`
  position: relative;

  ${props =>
    props.active &&
    `
    :after {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: ${props.theme.link};
      bottom: -${mixins.scale(0.5)};
      left: 0;
    }
  `}
`;

const Skills = () => {
  const [nextIndex, setNextIndex] = useState(0);

  return (
    <Theme theme={themes.light.accent}>
      <Band alternate={true}>
        <Container centerText={true}>
          <Tabs>
            <div>
              <TabItem active={nextIndex === 0}>
                <IconButton
                  // @todo
                  // tslint:disable-next-line: jsx-no-lambda
                  onClick={() => setNextIndex(0)}
                >
                  <Icon name={IconDictionary.Angular} />
                </IconButton>
              </TabItem>
              <TabItem active={nextIndex === 1}>
                <IconButton
                  // @todo
                  // tslint:disable-next-line: jsx-no-lambda
                  onClick={() => setNextIndex(1)}
                >
                  <Icon name={IconDictionary.React} />
                </IconButton>
              </TabItem>
              <TabItem active={nextIndex === 2}>
                <IconButton
                  // @todo
                  // tslint:disable-next-line: jsx-no-lambda
                  onClick={() => setNextIndex(2)}
                >
                  <Icon name={IconDictionary.Typescript} />
                </IconButton>
              </TabItem>
              <TabItem active={nextIndex === 3}>
                <IconButton
                  // @todo
                  // tslint:disable-next-line: jsx-no-lambda
                  onClick={() => setNextIndex(3)}
                >
                  <Icon name={IconDictionary.Npm} />
                </IconButton>
              </TabItem>
            </div>
          </Tabs>
          <Carousel nextIndex={nextIndex} onIndexChange={setNextIndex}>
            <CarouselItem>
              <OpaqueCard>
                <p>
                  During my time at Vermeg, I've had the opportunity to work
                  with Angular on many projects. This included converting legacy
                  Java / Flex / Flash applications to single-page Angular
                  applications with NGRX to handle state-management.
                </p>
              </OpaqueCard>
            </CarouselItem>
            <CarouselItem>
              <OpaqueCard>
                <p>
                  My personal favourite framework of choice is React. I'm yet to
                  have commercial experience with it so I'm very much looking
                  forward to future opportunities using it. This site is built
                  with Gatsby and React and you can view the code on{' '}
                  <a href="https://github.com/danielddb/my-website">GitHub</a>.
                </p>
              </OpaqueCard>
            </CarouselItem>
            <CarouselItem>
              <OpaqueCard>
                <p>
                  During my time at npower and Vermeg I've had the opportunity
                  to work with TypeScript in numerous projects. I couldn't
                  imagine not using it for future projects as having a typed
                  language in JS land is so useful and has been great for
                  catching bugs that might have cropped up without having a
                  typed language.
                </p>
              </OpaqueCard>
            </CarouselItem>
            <CarouselItem>
              <OpaqueCard>
                <p>
                  During my time at Vermeg, I've had the opportunity to develop
                  Angular NPM packages to be used as part of the "ng-vermeg"
                  component library. I introduced Lerna to the project to help
                  ease dependency management and versioning of components.
                </p>
              </OpaqueCard>
            </CarouselItem>
          </Carousel>
        </Container>
      </Band>
    </Theme>
  );
};

export default Skills;
