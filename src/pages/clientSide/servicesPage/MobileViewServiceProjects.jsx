import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import CardComponents from './components/CardComponents';



const MobileViewServiceProjects = ({ filteredProjects }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          filteredProjects?.map(project => <SwiperSlide key={project._id}>
            <CardComponents item={project}></CardComponents>
          </SwiperSlide>
          )
        }


      </Swiper>
    </>
  );
};

export default MobileViewServiceProjects;