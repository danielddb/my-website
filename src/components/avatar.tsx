import Img from 'gatsby-image';
import styled from 'styled-components';
import { toRem } from '../themes/functions';

const Avatar = styled(Img)`
  display: block;
  border-radius: 50%;
  overflow: hidden;
  border: ${toRem(3)} solid ${props => props.theme.palette.background.card};
`;

export default Avatar;
