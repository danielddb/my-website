import React from 'react';
import styled from 'styled-components';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';
import { clamp } from '../utils/number';
import Icon, { IconName } from './icon';
import ProgressBar from './progress-bar';
import IconLink from './icon-link';
import VerticalSpacing from './vertical-spacing';

const ControlElements = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ControlElement = styled.div`
  position: relative;
  padding: 0 ${toRem(spacingUnitMajorPx)};

  &:last-child {
    padding-right: 0;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: ${toRem(spacingUnitMajorPx)};
    width: ${toRem(1)};
    background: ${props => props.theme.palette.divider};
  }

  &:last-child:after {
    display: none;
  }
`;

const ArrowControls = styled.div`
  display: flex;
  margin-left: ${toRem(spacingUnitMajorPx * -1)};
`;

const ArrowControl = styled.div`
  padding-left: ${toRem(spacingUnitMajorPx)};
`;

const SliderControls: React.FC<{
  totalSlides: number;
  activeIndex: number;
  onNextClick: () => any;
  onPrevClick: () => any;
}> = ({ totalSlides, activeIndex, onNextClick, onPrevClick }) => {
  const clampedActiveSlide = clamp(activeIndex, 0, totalSlides - 1);

  return (
    <>
      <ControlElements>
        <ControlElement>
          {clampedActiveSlide + 1} / {totalSlides}
        </ControlElement>
        <ControlElement>
          <ArrowControls>
            <ArrowControl>
              <IconLink
                as="button"
                role="button"
                aria-label="Previous"
                disabled={clampedActiveSlide === 0}
                onClick={() => onPrevClick()}
                onKeyPress={() => onPrevClick()}
              >
                <Icon name={IconName.LeftArrow} id="previous" />
              </IconLink>
            </ArrowControl>
            <ArrowControl>
              <IconLink
                as="button"
                role="button"
                aria-label="Next"
                disabled={clampedActiveSlide === totalSlides - 1}
                onClick={() => onNextClick()}
                onKeyPress={() => onNextClick()}
              >
                <Icon name={IconName.RightArrow} id="right" />
              </IconLink>
            </ArrowControl>
          </ArrowControls>
        </ControlElement>
      </ControlElements>
      <VerticalSpacing spacing={1} topOnly>
        <ProgressBar percent={((clampedActiveSlide + 1) / totalSlides) * 100} />
      </VerticalSpacing>
    </>
  );
};

export default SliderControls;
