import Color from 'color';
import styled, { createGlobalStyle } from "styled-components";

import hero from '../../assets/hero.jpg';
import { colors } from "../../res/colors";

export const Global = createGlobalStyle`
  body {
    color: #777;
    font-family: "Lato", sans-serif;
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

export const Header = styled.header`
  background-image:
    linear-gradient(
      to right bottom,
      ${`${Color(colors.greenLight).alpha(0.8)}`},
      ${`${Color(colors.greenDark).alpha(0.8)}`}
    ), 
    url(${hero});
  background-position: top;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  height: 95vh;
  position: relative;
`

export const HeaderPrimary = styled.h1`
  color: ${colors.white};
  text-transform: uppercase;
`

export const HeaderPrimaryMain = styled.span`
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
`

export const HeaderPrimarySub = styled.span`
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
  transform: translate(-50%, -50%);
`
