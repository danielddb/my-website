import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon, { IconName } from './icon';
import NavList, { NavListItem } from './nav-list';
import IconLink from './icon-link';

const NavLink = styled(Link)`
  text-decoration: none;
  transition: border-bottom 300ms ease-in-out;

  &:hover,
  &:focus {
    text-decoration: none;
    box-shadow: 0 3px 0 0 ${props => props.theme.palette.primary.light};
  }
`;

const MainNavLinks = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socials {
              name
              url
              icon
            }
          }
        }
      }
    `
  );

  return (
    <NavList>
      <NavListItem>
        <NavLink to="/blog">Blog</NavLink>
      </NavListItem>
      {site.siteMetadata.socials.map(social => (
        <NavListItem key={social.name}>
          <IconLink
            as="a"
            href={social.url}
            target="_blank"
            rel="noopener"
            aria-label={`Dan Dawson-Brown's ${social.name} Page`}
          >
            <Icon name={social.icon as IconName} id={`navbar-${social.icon}`} />
          </IconLink>
        </NavListItem>
      ))}
    </NavList>
  );
};

export default MainNavLinks;
