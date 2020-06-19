import { axe } from 'jest-axe';
import React from 'react';
import { render as rtlRender } from 'test-utils/rtl';
import Code from '../code';

function render() {
  const codeString = `
  const routes: Routes = [
    {
      path: 'customers',
      loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    }
  ];
  `.trim();

  return {
    totalLines: 6,
    ...rtlRender(<Code codeString={codeString} language={`ts`} />)
  };
}

test('it should render correctly', () => {
  const { container } = render();
  expect(container).toMatchSnapshot();
});

test('it should render the line numbers correctly', () => {
  const { totalLines, getAllByTestId } = render();
  const lineNumbers = getAllByTestId('line-number').map(node =>
    node.textContent.trim()
  );
  expect(lineNumbers).toHaveLength(totalLines);
  expect(lineNumbers).toMatchInlineSnapshot(`
    Array [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
    ]
  `);
});

test('it should render with no accessibility issues', async () => {
  const { container } = render();
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
