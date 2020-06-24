/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { moveHorizontally } from '../res/animations';
import { colors } from '../res/colors';
import { mq, smallest } from '../res/styles';
import { TranslateXOrigin } from '../res/types';

interface Props {
  main: string;
  sub: string;
}

export const HeaderPrimary: React.FC<Props> = ({
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
    color: ${colors.white};
    margin-bottom: 6rem;
    text-align: center;
    text-transform: uppercase;
  `,
  main: css`
    animation: ${moveHorizontally(TranslateXOrigin.Left)} 1s ease-out;
    display: block;
    font-weight: 400;

    ${mq({
      fontSize: smallest(['5rem', '6rem']),
      letterSpacing: smallest(['1rem', '3.5rem']),
    })}
  `,
  sub: css`
    animation: ${moveHorizontally(TranslateXOrigin.Right)} 1s ease-out;
    display: block;
    font-size: 2rem;
    font-weight: 700;

    ${mq({
      letterSpacing: smallest(['.5rem', '1.75rem']),
    })}
  `,
};
