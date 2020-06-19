import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'test-utils/rtl';
import Card from '../card';

test('it should render correctly', () => {
  const { container } = render(<Card>Test</Card>);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      padding: 2rem;
      background: #e7e7e7;
      border-radius: 0.25rem;
    }

    .c0 > :first-child {
      margin-top: 0;
    }

    <div>
      <div
        class="c0"
      >
        Test
      </div>
    </div>
  `);
});

test('it should render with no accessibility issues', async () => {
  const { container } = render(<Card>Test</Card>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
