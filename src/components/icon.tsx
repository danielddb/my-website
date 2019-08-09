import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import IconAngular from '../svgs/icon-angular.svg';
import IconNpm from '../svgs/icon-npm.svg';
import IconReact from '../svgs/icon-react.svg';
import IconRecommendations from '../svgs/icon-recommendations.svg';
import IconRightArrow from '../svgs/icon-right-arrow.svg';
import TsSvg from '../svgs/icon-ts.svg';
import { scale } from '../theme/mixins';
import IconButton from './icon-button';
import IconLink from './icon-link';

const LeftArrowSvg = styled(IconRightArrow)`
  transform: rotate(180deg);
`;

export enum IconDictionary {
  Angular,
  LeftArrow,
  Npm,
  React,
  Recommendations,
  RightArrow,
  Typescript
}

const iconMap = {
  [IconDictionary.Angular]: IconAngular,
  [IconDictionary.LeftArrow]: LeftArrowSvg,
  [IconDictionary.Npm]: IconNpm,
  [IconDictionary.React]: IconReact,
  [IconDictionary.Recommendations]: IconRecommendations,
  [IconDictionary.RightArrow]: IconRightArrow,
  [IconDictionary.Typescript]: TsSvg
};

interface IconProps {
  name: IconDictionary;
  className?: string;
}

const Icon: FunctionComponent<IconProps> = ({ name, className }) => {
  const MatchedIcon = iconMap[name];

  if (!MatchedIcon) {
    return null;
  }

  return <MatchedIcon className={className} />;
};

const StyledIcon = styled(Icon)<{ scale?: number }>`
  display: inline-block;
  vertical-align: middle;
  width: ${props => scale(props.scale)};
  height: ${props => scale(props.scale)};
  fill: ${props => props.theme.icon};

  ${IconButton} &,
  ${IconLink} & {
    transition: opacity 300ms ease-in-out;
  }

  ${IconButton}:hover &,
  ${IconButton}:focus &,
  ${IconLink}:hover &,
  ${IconLink}:focus & {
    opacity: 0.8;
  }
`;

StyledIcon.defaultProps = {
  scale: 2
};

export default StyledIcon;
