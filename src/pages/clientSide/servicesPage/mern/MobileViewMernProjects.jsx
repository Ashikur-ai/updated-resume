import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import CardComponents from '../components/CardComponents';

const MobileViewMernProjects = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>

        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>

        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>
        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>
        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>
        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>
        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default MobileViewMernProjects;