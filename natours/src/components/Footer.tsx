/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { row, oneOf } from '../res/styles';
import { rgba } from '../utils/rgba';

const Link: React.FC = ({ children }) => (
  <a
    css={styles.link}
    href="#/"
  >
    {children}
  </a>
)

export const Footer: React.FC = () => (
  <footer css={styles.container}>
    <div css={styles.logoContainer}>
      <img
        alt="Full logo"
        css={styles.logo}
        src={require('../assets/logo-green-2x.png')}
      />
    </div>

    <div css={row}>
      <div css={oneOf(2)}>
        <div css={styles.navigation}>
          <ul css={styles.list}>
            <li>
              <Link>Company</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            <li>
              <Link>Career</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms</Link>
            </li>
          </ul>
        </div>
      </div>

      <div css={oneOf(2)}>
        <p css={styles.copyright}>
          Build my <Link>Jonas Schmedtmann</Link> for his online course <Link>Advanced CSS and Sass</Link>. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated.
        </p>
      </div>
    </div>
  </footer>
);

const styles = {
  container: css`
    background-color: ${colors.grayDark3};
    font-size: 1.4rem;
    padding: 10rem 0;
  `,
  copyright: css`
    border-top: 1px solid ${colors.grayDark1};
    color: ${colors.grayLight1};
    float: right;
    padding-top: 2rem;
    width: 80%;
  `,
  link: css`
    &:link,
    &:visited {
      background-color: ${colors.grayDark3};
      color: ${colors.grayLight1};
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .2s;
    }

    &:hover,
    &:active {
      color: ${colors.greenMedium};
      box-shadow: 0 1rem 2rem ${rgba(colors.black, 0.4)};
      transform: rotate(5deg) scale(1.3);
    }
  `,
  list: css`
    list-style: none;

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  `,
  logo: css`
    height: auto;
    width: 15rem;
  `,
  logoContainer: css`
    margin-bottom: 8rem;
    text-align: center;
  `,
  navigation: css`
    border-top: 1px solid ${colors.grayDark1};
    display: inline-block;
    padding-top: 2rem;
  `,
};
