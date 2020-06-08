import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Layout from '../../src/components/layout';
import Theme from '../../src/components/theme';
import Code from '../../src/components/code';
import styled from 'styled-components';
import { toRem } from '../../src/themes/functions';
import * as vars from '../../src/themes/variables';

const BreakOutContainer = styled.span`
  display: block;
  margin: 0 -${toRem(vars.spacingUnitMajorPx * 1.5)};
`;

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <BreakOutContainer>
          <Code
            codeString={props.children.trim()}
            language={
              props.className && props.className.replace('language-', '')
            }
            {...props}
          />
        </BreakOutContainer>
      );
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...props} />;
    }
  }
};

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <Theme>
      <MDXProvider components={components}>
        <Layout {...props}>{element}</Layout>
      </MDXProvider>
    </Theme>
  );
};
