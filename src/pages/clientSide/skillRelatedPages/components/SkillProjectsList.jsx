import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import CardComponents from '../../servicesPage/components/CardComponents';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SkillProjectsList = ({ filteredProjects }) => {
  return (
    <div className='my-10'>
      <div className="mt-40">
        {
          (filteredProjects.length) > 0 ?
            <p className='text-center font-semibold text-5xl'>My Recent Projects</p>
            :
            <div className='flex flex-col justify-center items-center'>
              <p className=' font-semibold text-5xl'>No Projects Added</p>
              <div className="">
                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1729354059/Portfolio/w13gbxk5huazznl2viqq.png" alt="" />
              </div>
            </div>

        }


        <div className="divider"></div>

      </div>


      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4} // Display 3 slides at once
        spaceBetween={30} // Adds space between slides
        initialSlide={1}
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
        {
          filteredProjects?.map(project => <SwiperSlide key={project._id}>
            <CardComponents item={project}></CardComponents>
          </SwiperSlide>
          )
        }




        {/* Add more slides here */}
      </Swiper>
    </div>
  );
};

export default SkillProjectsList;