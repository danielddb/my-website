import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'test-utils/rtl';
import ButtonLink from '../button-link';

test('it should render correctly', () => {
  const { container } = render(<ButtonLink to="/">Test</ButtonLink>);
  expect(container).toMatchSnapshot();
});

test('it should render correctly when rendered as a native "a" tag', () => {
  const { container } = render(
    <ButtonLink as="a" href="/">
      Test
    </ButtonLink>
  );
  expect(container).toMatchSnapshot();
});

test('it should render correctly with the primary styles applied', () => {
  const { container } = render(
    <ButtonLink as="a" href="/" primary={true}>
      Test
    </ButtonLink>
  );
  expect(container).toMatchSnapshot();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render(<ButtonLink>Test</ButtonLink>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
