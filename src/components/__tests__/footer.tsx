import { useStaticQuery } from 'gatsby';
import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'test-utils/rtl';
import Footer from '../footer';

const mockStaticQuery = useStaticQuery as jest.Mock<any>;

beforeEach(() => {
  mockStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        socials: [
          {
            name: 'GitHub',
            url: 'https://github.com/danielddb',
            icon: 'github'
          },
          {
            name: 'CodeSandbox',
            url: 'https://codesandbox.io/u/danielddb',
            icon: 'code-sandbox'
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dandawsonbrown',
            icon: 'linkedin'
          }
        ]
      }
    }
  }));
});

test('it should render correctly', () => {
  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});

test('it should render the correct nav links', () => {
  const { getByText, getByTitle } = render(<Footer />);

  expect(getByText(/blog/i)).toBeInTheDocument();
  expect(getByTitle(/github/i)).toBeInTheDocument();
  expect(getByTitle(/linkedin/i)).toBeInTheDocument();
  expect(getByTitle(/codesandbox/i)).toBeInTheDocument();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
