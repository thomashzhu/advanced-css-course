import React from 'react';

import { About } from './components/About';
import { Booking } from './components/Booking';
import { Button } from './components/Button';
import { Features } from './components/Features';
import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/Header';
import { HeaderPrimary } from './components/HeaderPrimary';
import { Logo } from './components/Logo';
import { Stories } from './components/Stories';
import { TextBox } from './components/TextBox';
import { Tours } from './components/Tours';
import { colors } from './res/colors';

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
          backgroundColor={colors.white}
          href="#"
          textColor={colors.grayDark1}
        >
          Discover our tours
        </Button>
      </TextBox>
    </Header>

    <About />

    <Features />

    <Tours />

    <Stories />

    <Booking />
  </React.Fragment>
);
