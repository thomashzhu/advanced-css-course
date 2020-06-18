/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { colors } from '../res/colors';

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
    >
      &nbsp;
    </label>

    <div css={styles.background}>
      &nbsp;
    </div>

    <nav css={styles.navigation}>
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
    height: 6rem;
    position: fixed;
    right: 6.5rem;
    top: 6.5rem;
    width: 6rem;
    z-index: 1000;
    transform: scale(100);
  `,
  button: css`
    background-color: ${colors.white};
    border-radius: 50%;
    height: 7rem;
    position: fixed;
    right: 6rem;
    top: 6rem;
    width: 7rem;
    z-index: 2000;
  `,
  checkbox: css`
    display: none;
  `,
  container: css`
    
  `,
  navigation: css`
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
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

    li {
      margin: 1rem;

      span {
        display: inline-block;
        margin-right: 1.5rem;
      }
    }
  `,
};
