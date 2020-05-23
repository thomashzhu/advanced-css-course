import React from 'react';

import { Button } from './components/Button';
import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/Header';
import { HeaderPrimary } from './components/HeaderPrimary';
import { Logo } from './components/Logo';
import { TextBox } from './components/TextBox';

export const App = () => (
  <React.Fragment>
    <GlobalStyles />

    <Header>
      <Logo />

      <TextBox>
        <HeaderPrimary
          main="Outdoor"
          sub="is where life happens"
        />

        <Button
          href="#"
          white
        >
          Discover our tours
        </Button>
      </TextBox>
    </Header>
  </React.Fragment>
);
