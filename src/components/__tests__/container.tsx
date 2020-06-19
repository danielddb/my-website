import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'test-utils/rtl';
import Container from '../container';

test('it should render correctly', () => {
  const { container } = render(<Container>Test</Container>);
  expect(container).toMatchSnapshot();
});

test('it should render correctly at "xs" breakpoint', () => {
  const { container } = render(<Container maxWidth="xs">Test</Container>);
  expect(container).toMatchSnapshot();
});

test('it should render correctly at "sm" breakpoint', () => {
  const { container } = render(<Container maxWidth="sm">Test</Container>);
  expect(container).toMatchSnapshot();
});

test('it should render correctly at "md" breakpoint', () => {
  const { container } = render(<Container maxWidth="md">Test</Container>);
  expect(container).toMatchSnapshot();
});

test('it should render correctly at "lg" breakpoint', () => {
  const { container } = render(<Container maxWidth="lg">Test</Container>);
  expect(container).toMatchSnapshot();
});

test('it should render with no accessibility issues', async () => {
  const { container } = render(<Container>Test</Container>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
