import { useStaticQuery } from 'gatsby';
import { axe } from 'jest-axe';
import React from 'react';
import { createGatsbyFixedImageMock } from 'test-utils/gatsby';
import { render } from 'test-utils/rtl';
import Avatar from '../avatar';
import BioSummary from '../bio-summary';

const mockStaticQuery = useStaticQuery as jest.Mock<any>;

beforeEach(() => {
  mockStaticQuery.mockImplementation(() => ({
    placeholderImage: {
      childImageSharp: {
        fixed: createGatsbyFixedImageMock()
      }
    }
  }));
});

test('it should render correctly', () => {
  const { container } = render(<BioSummary />);

  expect(container).toMatchSnapshot();
});

test('it should render with default options', () => {
  const { getByAltText, getByText } = render(<BioSummary />);
  expect(
    getByText(/dan dawson-brown/i, { selector: 'h5' })
  ).toBeInTheDocument();
  expect(
    getByText(/ui developer from brum/i, { selector: 'h6' })
  ).toBeInTheDocument();
  expect(getByAltText(/dan dawson-brown/i)).toBeInTheDocument();
});

test('it should render with custom options', () => {
  const title = 'Custom title';
  const subtitle = 'Custom subtitle';
  const altText = 'Custom alt text';
  const { getByAltText, getByText } = render(
    <BioSummary
      title={title}
      subtitle={subtitle}
      avatar={<Avatar fixed={createGatsbyFixedImageMock()} alt={altText} />}
    />
  );
  expect(getByText(title, { selector: 'h5' })).toBeInTheDocument();
  expect(getByText(subtitle, { selector: 'h6' })).toBeInTheDocument();
  expect(getByAltText(altText)).toBeInTheDocument();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render(<BioSummary />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
