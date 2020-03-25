import { Link } from 'gatsby';
import styled from 'styled-components';

const IconLink = styled(Link)`
  -webkit-appearance: none;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.palette.primary.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.palette.primary.light};
  }

  &:active {
    color: ${props => props.theme.palette.primary.dark};
  }

  &:disabled {
    color: ${props => props.theme.palette.text.secondary};
  }
`;

export default IconLink;
