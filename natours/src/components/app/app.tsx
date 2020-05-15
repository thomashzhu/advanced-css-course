import React from 'react';

import { Global, Header, HeaderPrimary, HeaderPrimaryMain, HeaderPrimarySub, Logo, LogoContainer, TextBox, WhiteButton } from './styled';

export const App = () => (
  <React.Fragment>
    <Global />

    <Header>
      <LogoContainer>
        <Logo
          alt="Logo"
          src={require('../../assets/logo-white.png')}
        />
      </LogoContainer>

      <TextBox>
        <HeaderPrimary>
          <HeaderPrimaryMain>
            Outdoor
          </HeaderPrimaryMain>

          <HeaderPrimarySub>
            is where life happens
          </HeaderPrimarySub>
        </HeaderPrimary>

        <WhiteButton
          animated
          href="#"
        >
          Discover our tours
        </WhiteButton>
      </TextBox>
    </Header>
  </React.Fragment>
);
