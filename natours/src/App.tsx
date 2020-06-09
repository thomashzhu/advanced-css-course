import React from 'react';

import { About } from './components/About';
import { Button } from './components/Button';
import { Features } from './components/Features';
import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/Header';
import { HeaderPrimary } from './components/HeaderPrimary';
import { Logo } from './components/Logo';
import { Tours } from './components/Tours';
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

    <About />

    <Features />

    <Tours />
  </React.Fragment>
);
