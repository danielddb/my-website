import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { resetTextDecoration } from '../themes/mixins';

export const StyledLink = styled(({ primary, ...props }) => (
  <Link {...props} />
))`
  ${resetTextDecoration}
`;

const ButtonLink = ({ children, ...props }) => (
  <Button as={StyledLink} {...props}>
    {children}
  </Button>
);

export default ButtonLink;
