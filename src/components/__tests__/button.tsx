import { axe } from 'jest-axe';
import React from 'react';
import { render as rtlRender } from 'test-utils/rtl';
import Button from '../button';

const render = () => {
  const expectedText = 'Button text';

  return {
    expectedText,
    ...rtlRender(<Button>{expectedText}</Button>)
  };
};

test('it should render correctly', () => {
  const { container } = render();
  expect(container).toMatchSnapshot();
});

test('it should render a native button element by default', () => {
  const { expectedText, getByText } = render();
  expect(getByText(expectedText, { selector: 'button' })).toBeInTheDocument();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render();
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
