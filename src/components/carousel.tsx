import React, { FunctionComponent, useMemo, useRef, useState } from 'react';
import {
  animated as a,
  interpolate,
  useSpring,
  useSprings
} from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';
import useMeasure from 'use-measure';
import { scale } from '../theme/mixins';
import { clamp } from '../utils/math';
import Icon, { IconDictionary } from './icon';
import IconButton from './icon-button';

const CarouselIconButton = styled(IconButton)<{
  align?: 'left' | 'right';
}>`
  position: absolute;
  top: 50%;
  transform: translate(
    ${props => (props.align === 'left' ? '-100%, -50%' : '100%, -50%')}
  );
  ${props => (props.align === 'left' ? 'left' : 'right')}: -${scale()};
`;

const UnstyledCarouselItem: FunctionComponent<{
  className?: string;
  style?: any;
}> = ({ children, className, style }) => (
  <a.div className={className} style={style}>
    {children}
  </a.div>
);

export const CarouselItem = styled(UnstyledCarouselItem)`
  display: flex;
`;

const CarouselItems = styled(a.div)<{ columns: number }>`
  display: grid;
  grid-column-gap: ${scale(0.5)};
  grid-template-columns: repeat(${props => props.columns}, 100%);
  cursor: grab;
`;

const UnstyledCarousel: FunctionComponent<{
  className?: string;
  nextIndex?: number;
  onIndexChange?: (index: number) => any;
}> = ({ children, className, nextIndex, onIndexChange }) => {
  const [activeIndex, setActiveIndex] = useState(nextIndex || 0);
  const activeIndexRef = useRef(nextIndex || 0);
  const carouselNodeRef = useRef(null);
  const carouselDimensions = useMeasure(carouselNodeRef);
  const totalItems = React.Children.count(children);
  const springs = useSprings(totalItems, i => ({
    opacity: activeIndexRef.current === i ? 1 : 0.4
  }));

  // @todo - revert to array destructuring once react-spring fixes type definitions
  const itemSpring = springs[0];
  const setItemSpring: any = springs[1];

  const [itemsSpring, setItemsSpring] = useSpring(() => ({
    activeIndex: activeIndexRef.current,
    xOffset: 0
  }));

  useMemo(() => {
    if (typeof nextIndex === 'number') {
      goTo(nextIndex);
    }
  }, [nextIndex]);

  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (cancel && down && distance > carouselDimensions.width / 4) {
        activeIndexRef.current = clamp(
          activeIndexRef.current + (xDir > 0 ? -1 : 1),
          0,
          totalItems - 1
        );

        setActiveIndex(activeIndexRef.current);

        if (onIndexChange) {
          onIndexChange(activeIndexRef.current);
        }

        cancel();
      }

      setItemsSpring({
        activeIndex: activeIndexRef.current,
        xOffset: down ? xDelta : 0
      });

      setItemSpring((i: number) => ({
        opacity: activeIndexRef.current === i ? 1 : 0.2
      }));
    }
  );

  const items = itemSpring.map((spring, i) => {
    const child = React.Children.toArray(children)[i];

    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      key: i,
      style: spring
    });
  });

  function goTo(index: number) {
    const newIndex = clamp(index, 0, totalItems - 1);

    activeIndexRef.current = newIndex;

    setActiveIndex(activeIndexRef.current);

    setItemsSpring({
      activeIndex: activeIndexRef.current,
      xOffset: 0
    });

    setItemSpring((i: number) => ({
      opacity: activeIndexRef.current === i ? 1 : 0.2
    }));

    if (onIndexChange) {
      onIndexChange(activeIndexRef.current);
    }
  }

  return (
    <div ref={carouselNodeRef} className={className}>
      <CarouselItems
        {...bind()}
        style={{
          transform: interpolate(
            [itemsSpring.activeIndex, itemsSpring.xOffset],
            (i, x) =>
              `translate3d(calc((${i} * (-100% - ${scale(
                0.5
              )})) + ${x}px), 0px, 0px)`
          )
        }}
        columns={items.length}
      >
        {items}
      </CarouselItems>
      {activeIndex > 0 && (
        <CarouselIconButton
          align="left"
          // @todo
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => goTo(activeIndexRef.current - 1)}
        >
          <Icon name={IconDictionary.LeftArrow} scale={1} />
        </CarouselIconButton>
      )}
      {activeIndex < items.length - 1 && (
        <CarouselIconButton
          // @todo
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => goTo(activeIndexRef.current + 1)}
        >
          <Icon name={IconDictionary.RightArrow} scale={1} />
        </CarouselIconButton>
      )}
    </div>
  );
};

const Carousel = styled(UnstyledCarousel)`
  position: relative;
  touch-action: pan-y;
  user-select: none;
`;

export default Carousel;
