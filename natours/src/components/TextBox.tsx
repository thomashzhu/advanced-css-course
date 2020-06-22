/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { center, centerText } from '../res/styles';

export const TextBox: React.FC = ({ children }) => (
  <div css={[ center, centerText ]}>
    {children}
  </div>
)
