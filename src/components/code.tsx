import Highlight, { defaultProps } from 'prism-react-renderer';
import dark from 'prism-react-renderer/themes/nightOwl';
import light from 'prism-react-renderer/themes/nightOwlLight';
import React from 'react';
import styled from 'styled-components';
import usePrefersDarkMode from '../hooks/use-prefers-dark-mode';
import { toRem } from '../themes/functions';
import * as vars from '../themes/variables';
import { respondTo } from '../themes/mixins';
import { copyToClipboard } from '../utils/string';

const Wrapper = styled.div`
  position: relative;
`;

const Pre = styled.pre`
  text-align: left;
  padding: ${toRem(vars.spacingUnitMinorPx * 4)}
    ${toRem(vars.spacingUnitMinorPx)} ${toRem(vars.spacingUnitMinorPx)};
  overflow-x: auto;
  border-radius: ${toRem(4)};
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  -webkit-appearance: none;
  position: absolute;
  top: ${toRem(vars.spacingUnitMinorPx)};
  right: ${toRem(vars.spacingUnitMinorPx)};
  border: 0;
  border-radius: ${toRem(4)};
  height: ${toRem(vars.spacingUnitMajorPx * 2)};
  margin: 0;
  padding: 0;
  opacity: 0.3;
  transition: opacity 300ms ease-in-out;
  color: ${props => props.theme.palette.text.primary};
  background: none;

  &:focus,
  &:hover {
    opacity: 1;
  }
`;

const Code = ({ codeString, language }) => {
  const prefersDarkMode = usePrefersDarkMode();
  const [theme, setTheme] = React.useState(dark);

  React.useEffect(() => {
    setTheme(prefersDarkMode ? dark : light);
  }, [prefersDarkMode]);

  return (
    <Wrapper>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            <CopyCode onClick={() => copyToClipboard(codeString)}>
              Copy
            </CopyCode>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
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
