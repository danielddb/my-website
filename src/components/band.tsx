import styled, { StyledProps } from 'styled-components';
import * as mixins from '../theme/mixins';

export type Props = StyledProps<{
  alternate?: boolean;
}>;

const Band = styled.section`
  padding: ${mixins.scale(2)} 0;
  overflow-x: hidden;
  background: ${(props: Props) =>
    !props.alternate
      ? props.theme.background
      : props.theme.backgroundAlternate};

  ${mixins.typeColor}

  a {
    ${mixins.link}
  }
`;

export default Band;
