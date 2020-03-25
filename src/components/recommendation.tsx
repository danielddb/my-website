import React from 'react';
import styled from 'styled-components';
import Card from './card';
import Icon, { IconName } from './icon';
import { toRem } from '../themes/functions';
import { h4 } from '../themes/mixins';
import { spacingUnitMajorPx } from '../themes/variables';

export const RecommendationText = styled.p`
  ${h4};
  margin: ${toRem(spacingUnitMajorPx * 2)} 0 0;
  flex: 1;
`;

const RecommendationCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const Recommendation: React.FC = ({ children }) => {
  return (
    <RecommendationCard>
      <Icon id="quote" name={IconName.Quote} />
      {children}
    </RecommendationCard>
  );
};

export default Recommendation;
