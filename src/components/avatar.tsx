import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { toRem } from '../themes/functions';
import * as vars from '../themes/variables';

const AvatarCircle = styled.div`
  width: ${toRem(vars.spacingUnitMajorPx * 7)};
  height: calc(${toRem(vars.spacingUnitMajorPx * 7)});
  border-radius: 50%;
  overflow: hidden;
  border: ${toRem(3)} solid ${props => props.theme.palette.background.card};
`;

const Avatar: React.FC<{ className?: string }> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AvatarCircle className={className}>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Photo of Daniel Dawson"
      />
    </AvatarCircle>
  );
};

export default Avatar;
