import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar';
import Heading from './heading';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';
import { GatsbyImageProps } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export interface Props {
  title?: string;
  subtitle?: string;
  avatar?: JSX.Element;
}

const Wrap = styled.div`
  display: flex;
`;

const AvatarWrap = styled.div`
  margin-right: ${toRem(spacingUnitMajorPx)};
`;

const BioHeading = styled(Heading)`
  margin-top: 0 !important;
`;

const DefaultBioSummaryAvatar: React.FC<GatsbyImageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Avatar
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="Author - Dan Dawson-Brown - UI Developer from Brum"
    />
  );
};

const BioSummary: React.FC<Props> = ({
  title = 'Dan Dawson-Brown',
  subtitle = 'UI Developer from Brum building tech for Vermeg.',
  avatar = <DefaultBioSummaryAvatar />
}: Props) => (
  <Wrap>
    <AvatarWrap>{avatar}</AvatarWrap>
    <div>
      <BioHeading as="h5">{title}</BioHeading>
      <BioHeading as="h6" isSubheading>
        {subtitle}
      </BioHeading>
    </div>
  </Wrap>
);

export default BioSummary;
