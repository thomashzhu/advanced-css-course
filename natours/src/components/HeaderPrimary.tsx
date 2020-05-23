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
  container: css`
    color: white;
    margin-bottom: 6rem;
    text-align: center;
    text-transform: uppercase;
  `,
  main: css`
    animation: ${moveHorizontally(TranslateXOrigin.Left)} 1s ease-out;
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;
  `,
  sub: css`
    animation: ${moveHorizontally(TranslateXOrigin.Right)} 1s ease-out;
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
  `
};
