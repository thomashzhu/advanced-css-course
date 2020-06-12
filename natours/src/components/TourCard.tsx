/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import Color from 'color';
import React from 'react';

import { colors } from '../res/colors';

interface Props {
  backgroundGradient: string;
  backgroundImage: string;
  heading: string;
  style: SerializedStyles
}

export const TourCard: React.FC<Props> = (props) => {
  const { heading, style } = props;

  return (
    <div css={[styles.container(props), style]}>
      <div className="side side--front">
        <div css={styles.picture(props)}>
          &nbsp;
        </div>

        <h4 css={styles.heading(props)}>
          <span className="heading--span">
            {heading}
          </span>
        </h4>

        <div css={styles.details}>
          details
        </div>
      </div>

      <div className="side side--back">
      </div>
    </div>
  );
}

const styles = {
  container: (props: Props) => css`
    -moz-perspective: 1500rem;
    height: 50rem;
    perspective: 1500rem;
    position: relative;

    .side {
      backface-visibility: hidden;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem ${Color(colors.black).alpha(0.15).toString()};
      height: 50rem;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      transition: all, .8s ease;
      width: 100%;

      &--front {
        background: white;
      };

      &--back {
        background-image: ${props.backgroundGradient};
        transform: rotateY(180deg);
      };
    };

    &:hover {
      .side--front {
        transform: rotateY(-180deg);
      };

      .side--back {
        transform: rotateY(0deg);
      };
    }
  `,
  details: css`

  `,
  heading: (props: Props) => css`
    color: ${colors.white};
    font-size: 2.8rem;
    font-weight: 300;
    position: absolute;
    right: 4rem;
    text-align: right;
    text-transform: uppercase;
    top: 12rem;
    width: 75%;

    .heading--span {
      background-image: ${props.backgroundGradient};
      box-decoration-break: clone;
      padding: 1rem 1.5rem;
    };
  `,
  picture: (props: Props) => css`
    background-blend-mode: screen;
    background-image: ${props.backgroundGradient}, url(${props.backgroundImage});
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    height: 23rem;
  `,
};
