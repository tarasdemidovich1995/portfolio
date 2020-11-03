import React from 'react';
import { SwiperSlide } from 'swiper/react';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Contacts from '../components/Contacts/Contacts';
import Portfolio from '../components/Portfolio/Portfolio';
import { PAGES } from '../config';

const useSlides = () => {
  return (
    <>
      <SwiperSlide data-history={PAGES.ABOUT}>
        <About />
      </SwiperSlide>
      <SwiperSlide data-history={PAGES.SKILLS}>
        <Skills />
      </SwiperSlide>
      <SwiperSlide data-history={PAGES.PORTFOLIO}>
        <Portfolio />
      </SwiperSlide>
      <SwiperSlide data-history={PAGES.CONTACTS}>
        <Contacts />
      </SwiperSlide>
    </>
  );
};

export default useSlides;
