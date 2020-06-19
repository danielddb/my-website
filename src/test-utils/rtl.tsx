import { render, RenderOptions } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../themes/light';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
