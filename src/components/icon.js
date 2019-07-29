import React from "react"
import styled from "styled-components"
import IconAngular from "../svgs/icon-angular.svg"
import IconButton from "./icon-button"
import IconLink from "./icon-link"
import IconReact from "../svgs/icon-react.svg"
import IconNpm from "../svgs/icon-npm.svg"
import IconRecommendations from "../svgs/icon-recommendations.svg"
import IconRightArrow from "../svgs/icon-right-arrow.svg"
import TsSvg from "../svgs/icon-ts.svg"
import { scale } from "../theme/mixins"

const LeftArrowSvg = styled(IconRightArrow)`
  transform: rotate(180deg);
`

export const iconKeys = {
  angular: "angular",
  npm: "npm",
  react: "react",
  recommendations: "recommendations",
  typescript: "typescript",
  rightArrow: "rightArrow",
  leftArrow: "leftArrow",
}

const iconMap = {
  angular: IconAngular,
  npm: IconNpm,
  react: IconReact,
  recommendations: IconRecommendations,
  typescript: TsSvg,
  rightArrow: IconRightArrow,
  leftArrow: LeftArrowSvg,
}

const Icon = ({ name, className }) => {
  const MatchedIcon = iconMap[name]

  if (!MatchedIcon) return null

  return <MatchedIcon className={className} />
}

const StyledIcon = styled(Icon)`
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
`

StyledIcon.defaultProps = {
  scale: 2,
}

export default StyledIcon
