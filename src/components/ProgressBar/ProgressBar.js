/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    "--height": "8px",
    "--padding": 0,
    "--radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": 0,
    "--radius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--radius": "8px",
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  padding: var(--padding);
  width: 370px;
  height: var(--height);
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: 100%;
  width: ${(p) => p.value}%;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={STYLES[size]}>
      <Bar value={value} />
    </Wrapper>
  );
};

export default ProgressBar;
