import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import CardComponents from '../components/CardComponents';

const MernProjects = () => {
  return (
    <div className='my-10'>
      <div className="mt-40">
        <p className='text-center font-semibold text-5xl'>My Recent Projects</p>
        <div className="divider"></div>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Display 3 slides at once
        spaceBetween={30} // Adds space between slides
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true, // Make pagination clickable
        }}
        modules={[EffectCoverflow, Pagination]}
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
        <SwiperSlide>
          <CardComponents></CardComponents>
        </SwiperSlide>


        {/* Add more slides here */}
      </Swiper>
    </div>
  );
};

export default MernProjects;