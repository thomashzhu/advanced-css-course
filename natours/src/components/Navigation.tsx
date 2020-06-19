/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { colors } from '../res/colors';
import { rgba } from '../utils/rgba';

interface Props {
  
}

const Link: React.FC = ({ children }) => (
  <a
    href="#/"
    css={styles.navigationItem}
  >
    {children}
  </a>
);

export const Navigation: React.FC<Props> = () => (
  <div css={styles.container}>
    <input
      css={styles.checkbox}
      id="navigation-toggle"
      type="checkbox"
    />
    <label
      css={styles.button}
      htmlFor="navigation-toggle"
      id="button"
    >
      <span
        css={styles.buttonIcon}
        id="button-icon"
      />
    </label>

    <div
      id="background"
      css={styles.background}
    />

    <nav
      css={styles.navigation}
      id="navigation"
    >
      <ul css={styles.navigationList}>
        <li>
          <Link><span>01</span>About Natours</Link>
        </li>
        <li>
          <Link><span>02</span>Your benefits</Link>
        </li>
        <li>
          <Link><span>03</span>Popular tours</Link>
        </li>
        <li>
          <Link><span>04</span>Stories</Link>
        </li>
        <li>
          <Link><span>05</span>Book now</Link>
        </li>
      </ul>
    </nav>
  </div>
);

const styles = {
  background: css`
    background-image: radial-gradient(${colors.greenLight}, ${colors.greenDark});
    border-radius: 50%;
    box-shadow: 0 1rem 3rem ${rgba(colors.black, 0.1)};
    height: 6rem;
    position: fixed;
    right: 6.5rem;
    top: 6.5rem;
    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
    width: 6rem;
    z-index: 1000;
  `,
  button: css`
    background-color: ${colors.white};
    border-radius: 50%;
    cursor: pointer;
    height: 7rem;
    position: fixed;
    right: 6rem;
    text-align: center;
    top: 6rem;
    width: 7rem;
    z-index: 2000;

    &:hover {
      #button-icon::before {
        top: -1rem;
      }
      
      #button-icon::after {
        top: 1rem;
      }
    }
  `,
  buttonIcon: css`
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      background-color: ${colors.grayDark3};
      display: inline-block;
      height: 2px;
      width: 3rem;
    }

    &::before,
    &::after {
      content: "";
      left: 0;
      position: absolute;
      transition: all .2s;
    }

    &::before {
      top: -.8rem;
    }

    &::after {
      top: .8rem;
    }
  `,
  checkbox: css`
    display: none;
  `,
  container: css`
    #navigation-toggle:checked ~ #background {
      transform: scale(100);
    }

    #navigation-toggle:checked + #button {
      #button-icon {
        background-color: transparent;
      }

      #button-icon::before {
        top: 0;
        transform: rotate(135deg);
      }

      #button-icon::after {
        top: 0;
        transform: rotate(-135deg);
      }
    }

    #navigation-toggle:checked ~ #navigation {
      opacity: 1;
      width: 100vw;
    }
  `,
  navigation: css`
    height: 100vh;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    width: 0;
    z-index: 1500;
  `,
  navigationItem: css`
    &:link,
    &:visited {
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${colors.white} 50%);
      background-size: 230%;
      color: ${colors.white};
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .4s;
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: ${colors.greenMedium};
      transform: translateX(1rem);
    }
  `,
  navigationList: css`
    left: 50%;
    list-style: none;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    li {
      margin: 1rem;

      span {
        display: inline-block;
        margin-right: 1.5rem;
      }
    }
  `,
};
