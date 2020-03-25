import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar';
import Heading from './heading';
import { toRem } from '../themes/functions';
import { spacingUnitMajorPx } from '../themes/variables';

const Wrap = styled.div`
  display: flex;
`;

const AvatarWrap = styled.div`
  margin-right: ${toRem(spacingUnitMajorPx)};
`;

const BioAvatar = styled(Avatar)`
  width: ${toRem(spacingUnitMajorPx * 4)};
  height: ${toRem(spacingUnitMajorPx * 4)};
`;

const BioHeading = styled(Heading)`
  margin-top: 0 !important;
`;

const BioSummary = () => (
  <Wrap>
    <AvatarWrap>
      <BioAvatar />
    </AvatarWrap>
    <div>
      <BioHeading as="h5">Daniel Dawson-Brown</BioHeading>
      <BioHeading as="h6" isSubheading>
        UI Developer from Brum building tech for Vermeg.
      </BioHeading>
    </div>
  </Wrap>
);

export default BioSummary;
