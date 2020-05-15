import Color from 'color';
import styled, { createGlobalStyle } from "styled-components";

import hero from '../../assets/hero.jpg';
import { colors } from "../../res/colors";
import { moveHorizontally, moveVertically } from './animations';
import { TranslateXOrigin, TranslateYOrigin } from '../../res/types';

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');

  body {
    color: #777;
    font-family: Lato, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    padding: 30px;
  }

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Button = styled.a`
  &:link,
  &:visited {
    border-radius: 100px;
    display: inline-block;
    padding: 15px 40px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s;
  }

  &:hover {
    box-shadow: 0 10px 20px ${Color('black').alpha(0.2).toString()};
    transform: translateY(-3px);

    &::after {
      opacity: 0;
      transform: scaleX(1.4) scaleY(1.6);
    }
  }

  &:active {
    box-shadow: 0 5px 10px ${Color('black').alpha(0.2).toString()};
    transform: translateY(-1px);
  }

  &::after {
    border-radius: 100px;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.4s;
    width: 100%;
    z-index: -1;
  }
`

export const WhiteButton = styled(Button)`
  animation: ${(props: { animated: boolean }) => props.animated ? moveVertically(TranslateYOrigin.Bottom) : 'none'} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
  background-color: white;
  color: #777;

  &::after {
    background-color: white;
  }
`

export const Header = styled.header`
  background-image:
    linear-gradient(
      to right bottom,
      ${Color(colors.greenLight).alpha(0.8).toString()},
      ${Color(colors.greenDark).alpha(0.8).toString()}
    ), 
    url(${hero});
  background-position: top;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  height: 95vh;
  position: relative;
`

export const HeaderPrimary = styled.h1`
  color: white;
  margin-bottom: 60px;
  text-align: center;
  text-transform: uppercase;
`

// If animation is blurry, see https://stackoverflow.com/questions/14677490/blurry-text-after-using-css-transform-scale-in-chrome

export const HeaderPrimaryMain = styled.span`
  animation: ${moveHorizontally(TranslateXOrigin.Left)} 1s ease-out;
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
`

export const HeaderPrimarySub = styled.span`
animation: ${moveHorizontally(TranslateXOrigin.Right)} 1s ease-out;
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
`

export const Logo = styled.img`
  height: 35px;
`

export const LogoContainer = styled.div`
  left: 40px;
  position: absolute;
  top: 40px;
`

export const TextBox = styled.div`
  left: 50%;
  position: absolute;
  top: 40%;
  text-align: center;
  transform: translate(-50%, -50%);
`
