import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx, spacingUnitMinorPx } from '../themes/variables';
import { clamp } from '../utils/number';

const BarWrap = styled.div`
  position: relative;
  height: ${toRem(spacingUnitMajorPx)};
`;

const Bar = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: ${toRem(spacingUnitMinorPx / 2)};
  width: 0;
  border-radius: ${toRem(4)};
`;

const BarBack = styled(Bar)`
  width: 100%;
  background: ${props => props.theme.palette.background.card};
`;

const BarProgress = styled(Bar)<{ percent: number }>`
  background: ${props => props.theme.palette.text.primary};
`;

const AnimatedBarProgress = animated(BarProgress);

const ProgressBar: React.FC<{ percent?: number }> = ({ percent }) => {
  const props = useSpring({ width: `${clamp(percent, 0, 100)}%` });

  return (
    <BarWrap>
      <BarBack />
      <AnimatedBarProgress style={props} />
    </BarWrap>
  );
};

ProgressBar.defaultProps = {
  percent: 0
};

export default ProgressBar;
