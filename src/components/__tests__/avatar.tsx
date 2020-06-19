import { axe } from 'jest-axe';
import React from 'react';
import { createGatsbyFixedImageMock } from 'test-utils/gatsby';
import { render as rtlRender } from 'test-utils/rtl';
import Avatar from '../avatar';

function render() {
  const expectedAltText = 'Author avatar';
  const utils = rtlRender(
    <Avatar fixed={createGatsbyFixedImageMock()} alt={expectedAltText} />
  );

  return {
    expectedAltText,
    ...utils
  };
}

test('it should render correctly', () => {
  const { container } = render();
  expect(container).toMatchSnapshot();
});

test('it should render with the correct alt text', () => {
  const { expectedAltText, getByAltText } = render();
  expect(getByAltText(expectedAltText)).toBeInTheDocument();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render();
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
