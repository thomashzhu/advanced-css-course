/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { defaultFontSize, marginBottom } from '../res/styles';

interface Props {
  heading: string;
}

export const HeadingTertiary: React.FC<Props> = ({
  children, heading,
}) => (
  <React.Fragment>
    <h3 css={[styles.container, marginBottom(1.5)]}>
      {heading}
    </h3>

    <p css={[styles.paragraph, marginBottom(1.5)]}>
      {children}
    </p>
  </React.Fragment>
);

const styles = {
  container: css({
    fontSize: defaultFontSize,
    fontWeight: 700,
    textTransform: 'uppercase',
  }),
  paragraph: css({
    fontSize: defaultFontSize,

    '&:not(:last-child)': {
      marginBottom: '3rem',
    },
  }),
};
