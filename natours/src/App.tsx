import React from 'react';

import { About } from './components/About';
import { AnchorButton } from './components/Buttons';
import { Booking } from './components/Booking';
import { Features } from './components/Features';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
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

    <Navigation />
    
    <Header>
      <Logo />

      <TextBox>
        <HeaderPrimary
          main="Outdoor"
          sub="is where life happens"
        />

        <AnchorButton
          backgroundColor={colors.white}
          href="#"
          textColor={colors.grayDark1}
        >
          Discover our tours
        </AnchorButton>
      </TextBox>
    </Header>

    <main>
      <About />

      <Features />

      <Tours />

      <Stories />

      <Booking />
    </main>

    <Footer />
  </React.Fragment>
);
