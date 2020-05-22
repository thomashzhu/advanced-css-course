import React from 'react';

import { Button } from '../Button';
import { Global } from '../Global';
import { Header } from '../Header';
import { HeaderPrimary } from '../HeaderPrimary';

export const App = () => (
  <React.Fragment>
    <Global />

    <Header.Container>
      <Header.LogoBox>
        <Header.Logo
          alt="Logo"
          src={require('../../assets/logo-white.png')}
        />
      </Header.LogoBox>

      <Header.TextBox>
        <HeaderPrimary.Container>
          <HeaderPrimary.Main>
            Outdoor
          </HeaderPrimary.Main>

          <HeaderPrimary.Sub>
            is where life happens
          </HeaderPrimary.Sub>
        </HeaderPrimary.Container>

        <Button.White
          animated
          href="#"
        >
          Discover our tours
        </Button.White>
      </Header.TextBox>
    </Header.Container>
  </React.Fragment>
);
