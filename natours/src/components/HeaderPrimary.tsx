/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { moveHorizontally } from '../res/animations';
import { TranslateXOrigin } from '../res/types';

interface IProps {
  main: string;
  sub: string;
}

export const HeaderPrimary: React.FC<IProps> = ({
  main, sub,
}) => (
  <h1 css={styles.container}>
    <span css={styles.main}>
      {main}
    </span>

    <span css={styles.sub}>
      {sub}
    </span>
  </h1>
)

const styles = {
  container: css({
    color: 'white',
    marginBottom: '6rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  }),
  main: css({
    animation: `${moveHorizontally(TranslateXOrigin.Left)} 1s ease-out`,
    display: 'block',
    fontSize: '6rem',
    fontWeight: 400,
    letterSpacing: '3.5rem',
  }),
  sub: css({
    animation: `${moveHorizontally(TranslateXOrigin.Right)} 1s ease-out`,
    display: 'block',
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '1.75rem',
  }),
};
