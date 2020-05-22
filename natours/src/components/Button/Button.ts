import Color from 'color';
import styled from 'styled-components';

export const Button = styled.a`
  &:link,
  &:visited {
    border-radius: 10rem;
    display: inline-block;
    padding: 1.5rem 4rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .2s;
  }

  &:hover {
    box-shadow: 0 1rem 2rem ${Color('black').alpha(0.2).toString()};
    transform: translateY(-.3rem);

    &::after {
      opacity: 0;
      transform: scaleX(1.4) scaleY(1.6);
    }
  }

  &:active {
    box-shadow: 0 .5rem 1rem ${Color('black').alpha(0.2).toString()};
    transform: translateY(-.1rem);
  }

  &::after {
    border-radius: 10rem;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all .4s;
    width: 100%;
    z-index: -1;
  }
`;
