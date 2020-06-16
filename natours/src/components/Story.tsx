/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { rgba } from '../utils/rgba';
import { defaultFontSize } from '../res/styles';
import { HeadingTertiary } from './HeadingTertiary';

interface Props {
  caption: string
  heading: string;
  image: string;
  paragraph: string;
}

export const Story: React.FC<Props> = ({
  caption, heading, image, paragraph,
}) => (
  <div css={styles.container}>
    <figure css={styles.shape}>
      <img
        alt="Person on a tour"
        className="image"
        css={styles.image}
        src={image}
      />

      <figcaption
        className="caption"
        css={styles.caption}
      >
        {caption}
      </figcaption>
    </figure>

    <div css={styles.text}>
      <HeadingTertiary heading={heading}>
        {paragraph}
      </HeadingTertiary>
    </div>
  </div>
);

const styles = {
  caption: css`
    backface-visibility: hidden;
    color: ${colors.white};
    font-size: 1.7rem;
    left: 50%;
    opacity: 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, 20%);
    transition: all .5s;
  `,
  container: css`
    background-color: ${rgba(colors.white, 0.6)};
    border-radius: 3px;
    box-shadow: 0 3rem 6rem ${rgba(colors.black, 0.1)};
    font-size: ${defaultFontSize};
    margin: 0 auto;
    padding: 6rem 6rem 6rem 9rem;
    transform: skewX(-12deg);
    width: 75%;

    & > * {
      transform: skewX(12deg);
    }

    &:hover {
      .caption {
        opacity: 1;
        transform: translate(-50%, -50%);
      }

      .image {
        filter: blur(3px) brightness(80%);
        height: 100%;
        transform: translate(-50%, -50%);
      }
    }
  `,
  image: css`
    background-size: cover;
    height: 140%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all .5s;
  `,
  shape: css`
    clip-path: circle(50% at 50% 50%);
    float: left;
    height: 15rem;
    overflow: hidden;
    position: relative;
    shape-outside: circle(50% at 50% 50%);
    transform: skewX(12deg) translateX(-3rem);
    width: 15rem;
  `,
  text: css`
    
  `,
};
