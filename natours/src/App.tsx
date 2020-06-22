import React from 'react';

import { About } from './components/About';
import { Booking } from './components/Booking';
import { AnchorButton } from './components/Buttons';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/Header';
import { HeaderPrimary } from './components/HeaderPrimary';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Popup } from './components/Popup';
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

    <Popup />
  </React.Fragment>
);
