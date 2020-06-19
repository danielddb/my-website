import { axe } from 'jest-axe';
import React from 'react';
import { render as rtlRender } from 'test-utils/rtl';
import Band from '../band';

const render = () => {
  const expectedText = 'Some text';

  return {
    expectedText,
    ...rtlRender(<Band>{expectedText}</Band>)
  };
};

test('it should render correctly', () => {
  const { container } = render();
  expect(container).toMatchSnapshot();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render();
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
