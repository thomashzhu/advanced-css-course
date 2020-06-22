/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { center } from '../res/styles';
import { rgba } from '../utils/rgba';
import { AnchorButton } from './Buttons';
import { HeadingSecondary } from './HeadingSecondary';
import { HeadingTertiary } from './HeadingTertiary';

interface Props {
  
}

export const Popup: React.FC<Props> = () => (
  <div
    css={styles.container}
    id="popup"
  >
    <div
      css={styles.content}
      id="content"
    >
      <div css={styles.left}>
        <img
          alt="Tour 1"
          css={styles.image}
          src={require('../assets/nat-8.jpg')}
        />
        <img
          alt="Tour 2"
          css={styles.image}
          src={require('../assets/nat-9.jpg')}
        />
      </div>

      <div css={styles.right}>
        <a
          css={styles.close}
          href="#tours"
        >
          &times;
        </a>

        <HeadingSecondary bottomSpace={4}>
          Start booking now
        </HeadingSecondary>

        <HeadingTertiary
          heading="Import &ndash; Please read these terms before booking"
          textStyle={styles.text}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil illo nisi non sit impedit incidunt unde ipsa ex modi officia vel doloremque qui officiis, ipsum laborum delectus dicta neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga mollitia deserunt, soluta quos repudiandae aut quod quis nobis sapiente explicabo error beatae sequi hic suscipit accusamus odio! Ab, et. Fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus, consequuntur modi excepturi quia sapiente eos ipsam molestias asperiores assumenda aut eaque similique quasi? Obcaecati ipsam minus est facere. Voluptatem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eligendi, dicta labore laborum, corrupti asperiores nihil nulla minima ab, hic suscipit! Sequi porro nobis nisi explicabo. Ipsa mollitia rerum laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, rem iste. Quas iure eum cum itaque, distinctio obcaecati sunt id, nostrum molestias, dolorum quo laudantium aperiam voluptate exercitationem! Ipsum, ad!
        </HeadingTertiary>

        <AnchorButton
          backgroundColor={colors.greenMedium}
          href="#"
          textColor={colors.white}
        >
          Book now
        </AnchorButton>
      </div>
    </div>
  </div>
);

const styles = {
  close: css`
    &:link,
    &:visited {
      color: ${colors.grayDark1};
      display: inline-block;
      font-size: 3rem;
      line-height: 1;
      position: absolute;
      right: 2.5rem;
      text-decoration: none;
      top: 2.5rem;
    }

    &:hover {
      color: ${colors.greenMedium};
    }
  `,
  container: css`
    background-color: ${rgba(colors.black, 0.8)};
    height: 100vh;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    transition: all .3s;
    visibility: hidden;
    width: 100vw;
    z-index: 9999;

    &:target {
      opacity: 1;
      visibility: visible;

      #content {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `,
  content: css`
    ${center};

    background-color: ${colors.white};
    border-radius: 3px;
    box-shadow: 0 2rem 4rem ${rgba(colors.black, 0.2)};
    display: table;
    height: 50rem;
    opacity: 0;
    overflow: hidden;
    transition: all .5s .2s;
    transform: translate(-50%, -50%) scale(0.25); // effect order does matter!
    width: 75vw;
  `,
  image: css`
    display: block;
    width: 100%;
  `,
  left: css`
    display: table-cell;
    vertical-align: middle;
    width: ${100 * 1 / 3}%;
  `,
  right: css`
    display: table-cell;
    padding: 3rem 5rem;
    vertical-align: middle;
    width: ${100 * 2 / 3}%;
  `,
  text: css`
    -moz-column-count: 2;
    -moz-column-gap: 4rem;
    -moz-column-rule: 1px solid ${colors.grayDark2};
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    column-count: 2;
    column-gap: 4rem;
    column-rule: 1px solid ${colors.grayDark2};
    font-size: 1.4rem;
    hyphens: auto;
    margin-bottom: 4rem;
  `,
};
