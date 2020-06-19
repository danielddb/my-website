import Highlight, { defaultProps } from 'prism-react-renderer';
import dark from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';
import { toRem } from '../themes/functions';
import * as vars from '../themes/variables';

const Wrapper = styled.div`
  position: relative;
`;

const Pre = styled.pre`
  text-align: left;
  padding: ${toRem(vars.spacingUnitMinorPx)};
  overflow-x: auto;
  border-radius: ${toRem(4)};
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const Code = ({ codeString, language }) => {
  return (
    <Wrapper>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={dark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo data-testid="line-number">{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </Wrapper>
  );
};

export default Code;
