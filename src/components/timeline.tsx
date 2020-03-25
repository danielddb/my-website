import styled, { css } from 'styled-components';
import { respondTo } from '../themes/mixins';
import { spacingUnitMinorPx, spacingUnitMajorPx } from '../themes/variables';
import { toRem } from '../themes/functions';

const lineWidthPx = spacingUnitMinorPx / 2;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimelineItem = styled.div`
  position: relative;

  ${respondTo.lg`
    text-align: right;
    width: 50%;
  `}

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -${lineWidthPx / 2}px;
    width: ${lineWidthPx}px;
    background: ${props => props.theme.palette.divider};

    ${respondTo.lg`
      left: initial;
      right: -${lineWidthPx / 2}px;
    `}
  }

  &:nth-child(even) {
    ${respondTo.lg`
    text-align: inherit;
    align-self: flex-end;
    `}

    &:before {
      ${respondTo.lg`
        right: initial;
        left: -${lineWidthPx / 2}px;
      `}
    }
  }
`;

export const TimelineItemContent = styled.div`
  position: relative;
  padding-left: ${toRem(spacingUnitMajorPx * 4)};

  ${respondTo.lg`
    padding-left: 0;
    padding-right: ${toRem(spacingUnitMajorPx * 4)};
  `}

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: calc(${toRem(spacingUnitMajorPx)} - ${lineWidthPx / 2}px);
    width: ${toRem(spacingUnitMajorPx * 3)};
    left: 0;
    height: ${lineWidthPx}px;
    background: ${props => props.theme.palette.divider};

    ${respondTo.lg`
      left: initial;
      right: 0;
    `}

    ${TimelineItem}:first-child & {
      background: ${props => props.theme.palette.primary.main};
    }
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: ${toRem(spacingUnitMajorPx / 2)};
    border-radius: 50%;
    width: ${toRem(spacingUnitMajorPx)};
    height: ${toRem(spacingUnitMajorPx)};
    left: -${toRem(spacingUnitMajorPx / 2)};
    background: ${props => props.theme.palette.divider};
    outline: ${toRem(10)} solid
      ${props => props.theme.palette.background.default};

    ${TimelineItem}:first-child & {
      background: ${props => props.theme.palette.primary.main};
    }

    ${respondTo.lg`
      left: initial;
      right: -${toRem(spacingUnitMajorPx / 2)};
    `}
  }

  ${TimelineItem}:nth-child(even) & {
    ${respondTo.lg`
      padding-left: ${toRem(spacingUnitMajorPx * 4)};
      padding-right: 0;

      &:before {
        right: initial;
        left: 0;
      }

      &:after {
        right: initial;
        left: -${toRem(spacingUnitMajorPx / 2)};
      }
    `}
  }
`;

export default Timeline;
