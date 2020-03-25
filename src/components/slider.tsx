import { ResizeObserver } from '@juggle/resize-observer';
import React, { useEffect, ReactNode } from 'react';
import { useSprings, animated as a, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import SliderControls from '../components/slider-controls';
import { clamp } from '../utils/number';
import VerticalSpacing from './vertical-spacing';
import { respondTo } from '../themes/mixins';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';

const SliderTrack = styled.div`
  display: flex;
  position: relative;
  padding-right: ${toRem(spacingUnitMajorPx * 2)};
  margin: 0 auto;
  touch-action: pan-y;
  user-select: none;

  ${respondTo.sm`
    padding-right: 0;
  `}
`;

const SliderItem = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  will-change: transform;
`;

const AnimatedSliderItem = a(SliderItem);

const Slider: React.FC<{ slides: ReactNode[] }> = ({ slides }) => {
  const totalSlides = slides && slides.length ? slides.length : 0;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });
  const [springs, set] = useSprings(slides.length, i => ({
    offset: 0,
    x: -(activeIndex * 100),
    opacity: i === activeIndex ? 1 : 0.4,
    scale: i === activeIndex ? 1 : 0.9
  }));

  const setAny = set as any;

  function clampIndex(index: number) {
    return clamp(index, 0, totalSlides - 1);
  }

  useEffect(() => {
    setAny(i => ({
      x: -(activeIndex * 100),
      opacity: i === activeIndex ? 1 : 0.4,
      scale: i === activeIndex ? 1 : 0.9
    }));
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex > slides.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, slides]);

  const bind = useGesture({
    onDrag: ({
      down,
      movement: [xMovement],
      direction: [xDir],
      cancel,
      velocity
    }) => {
      const trigger = down && slides.length > 1;

      if (
        trigger &&
        (Math.abs(xMovement) >= bounds.width / 2 || velocity > 1.5)
      ) {
        cancel();
        setActiveIndex(index => clampIndex(index + (xDir > 0 ? -1 : 1)));
      }

      setAny(_ => ({
        offset: trigger ? xMovement : 0
      }));
    }
  });

  return (
    totalSlides > 0 && (
      <>
        <SliderTrack ref={ref}>
          {springs.map((props, i) => (
            <AnimatedSliderItem
              key={i}
              {...bind()}
              style={{
                opacity: props.opacity,
                transform: interpolate(
                  [props.x, props.offset, props.scale],
                  (x, offset, scale) =>
                    `translate3d(calc(${x}% + ${offset}px),0,0) scale(${scale})`
                )
              }}
            >
              {slides[i]}
            </AnimatedSliderItem>
          ))}
        </SliderTrack>
        {totalSlides > 1 && (
          <VerticalSpacing spacing={2} topOnly>
            <SliderControls
              totalSlides={totalSlides}
              activeIndex={activeIndex}
              onNextClick={() => setActiveIndex(i => clampIndex(i + 1))}
              onPrevClick={() => setActiveIndex(i => clampIndex(i - 1))}
            />
          </VerticalSpacing>
        )}
      </>
    )
  );
};

export default Slider;
