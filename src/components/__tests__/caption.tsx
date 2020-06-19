import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'test-utils/rtl';
import Caption from '../caption';

test('it should render correctly', () => {
  const { container } = render(<Caption>Test</Caption>);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      margin: 0;
      font-size: 1.125rem;
      line-height: 1rem;
      color: #888888;
    }

    <div>
      <p
        class="c0"
      >
        Test
      </p>
    </div>
  `);
});

test('it should render with an alernative selector', () => {
  const text = 'Test';
  const selector = 'span';
  const { getByText } = render(<Caption as={selector}>{text}</Caption>);
  expect(getByText(text, { selector })).toMatchSnapshot();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render(<Caption>Test</Caption>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
