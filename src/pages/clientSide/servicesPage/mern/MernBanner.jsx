import React from 'react';
import { FaReact } from 'react-icons/fa';

const MernBanner = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="lg:flex justify-between">
          <div className="border flex justify-center  items-center lg:w-1/2">
            <p className='text-7xl '>
              Crafting Exceptional Experiences: MERN Stack Development Services
            </p>
          </div>
          <div className="border lg:w-1/2 flex justify-center text-[500px]">
            <FaReact />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default MernBanner;