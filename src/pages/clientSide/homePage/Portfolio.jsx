import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Portfolio.css";
import { EffectCube, Pagination } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h2 className="lg:text-6xl text-5xl font-semibold">
          Lets have a look at <br /> my{" "}
          <span className="text-theme_primary">Portfolio</span>
        </h2>
        <div>
          <button className="bg-theme_primary py-3 mt-5 lg:mt-0 px-6 text-white rounded-[60px]">
            See All
          </button>
        </div>
      </div>

      <div className="relative w-11/12 mx-auto h-max py-12">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper h-max"
        >
          <SwiperSlide>
             <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex gap-8 w-full">
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-8 w-full">
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-8 w-full">
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-8 w-full">
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
