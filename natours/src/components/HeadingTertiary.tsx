/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';
import React from 'react';

import { defaultFontSize, marginBottom } from '../res/styles';

interface Props {
  bottomSpace?: number;
  heading: string;
  textStyle?: SerializedStyles;
}

export const HeadingTertiary: React.FC<Props> = ({
  bottomSpace = 1.5, children, heading, textStyle = {}
}) => (
  <React.Fragment>
    <h3 css={[styles.container, marginBottom(bottomSpace)]}>
      {heading}
    </h3>

    <p css={[styles.paragraph, marginBottom(bottomSpace), textStyle]}>
      {children}
    </p>
  </React.Fragment>
);

const styles = {
  container: css`
    font-size: ${defaultFontSize};
    font-weight: 700;
    text-transform: uppercase;
  `,
  paragraph: css`
    font-size: ${defaultFontSize};

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  `,
};
