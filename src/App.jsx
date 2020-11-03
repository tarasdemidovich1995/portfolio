import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { EffectCoverflow, History, Mousewheel } from 'swiper';
import Navigation from './components/Navigation/Navigation';
import MenuButton from './components/MenuButton/MenuButton';
import useSlides from './hooks/useSlides';
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

const styles = {
  width: '100vw',
  height: '100vh',
};

SwiperCore.use([EffectCoverflow, History, Mousewheel]);

const App = () => {
  const [swiper, setSwiper] = useState(null);
  const [isMenuOpen, toggleMenu] = useState(false);
  const slides = useSlides();

  const changeSlide = (event) => {
    if (swiper) {
      swiper.slideTo(event.target.dataset.slide);
    }
    toggleMenu(false);
  };

  const menuHandler = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <div>
      <Navigation isOpen={isMenuOpen} clickHandler={changeSlide} />
      <MenuButton isOpen={isMenuOpen} clickHandler={menuHandler} />
      <Swiper
        style={styles}
        spaceBetween={0}
        slidesPerView={1}
        effect="coverflow"
        mousewheel={true}
        direction="vertical"
        history={{
          replaceState: true,
        }}
        onSwiper={setSwiper}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default App;
