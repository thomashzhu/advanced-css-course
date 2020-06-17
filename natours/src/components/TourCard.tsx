/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { rgba } from '../utils/rgba';
import { AnchorButton } from './Buttons';

interface Props {
  backgroundImage: string;
  colorDark: string;
  colorLight: string;
  heading: string;
  items: string[];
  price: string;
  style: SerializedStyles
}

export const TourCard: React.FC<Props> = (props) => {
  const { heading, items, price, style } = props;

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
          <ul>
            {items.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="side side--back">
        <div css={styles.callToAction}>
          <div css={styles.price}>
            <p className="price--text">
              Only
            </p>
            <p className="price--value">
              {price}
            </p>
          </div>

          <AnchorButton
            backgroundColor={colors.white}
            href="#"
            textColor={colors.grayDark1}
          >
            Book now!
          </AnchorButton>
        </div>
      </div>
    </div>
  );
}

const styles = {
  callToAction: css`
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  `,
  container: (props: Props) => css`
    -moz-perspective: 1500rem;
    height: 52rem;
    perspective: 1500rem;
    position: relative;

    .side {
      backface-visibility: hidden;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem ${rgba(colors.black, 0.15)};
      height: 52rem;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      transition: all, .8s ease;
      width: 100%;

      &--front {
        background: white;
      }

      &--back {
        background-image:
          linear-gradient(
            to right bottom,
            ${props.colorLight},
            ${props.colorDark}
          );
        transform: rotateY(180deg);
      }
    }

    &:hover {
      .side--front {
        transform: rotateY(-180deg);
      }

      .side--back {
        transform: rotateY(0deg);
      }
    }
  `,
  details: css`
    ul {
      list-style: none;
      margin: 0 auto;
      padding: 3rem;
      width: 80%;

      li {
        font-size: 1.5rem;
        padding: 1rem;
        text-align: center;

        &:not(:last-child) {
          border-bottom: 1px solid ${colors.grayLight2};
        }
      }
    }
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
      background-image:
        linear-gradient(
          to right bottom,
          ${rgba(props.colorLight, 0.8)},
          ${rgba(props.colorDark, 0.8)}
        );
      box-decoration-break: clone;
      padding: 1rem 1.5rem;
    }
  `,
  picture: (props: Props) => css`
    background-blend-mode: screen;
    background-image:
      linear-gradient(
        to right bottom,
        ${props.colorLight},
        ${props.colorDark}
      ),
      url(${props.backgroundImage});
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    height: 23rem;
  `,
  price: css`
    color: ${colors.white};
    text-align: center;
    margin-bottom: 8rem;

    .price--text {
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    .price--value {
      font-size: 6rem;
      font-weight: 100;
    }
  `,
};
