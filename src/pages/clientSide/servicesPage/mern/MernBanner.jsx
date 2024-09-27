import React from 'react';
import { FaReact } from 'react-icons/fa';

const MernBanner = () => {
  return (
    <div>
      <div className="">
        <div className="lg:flex justify-between">
          <div className=" flex justify-center  items-center lg:w-1/2">
            <div>
              <p className='text-6xl font-semibold'>
                Crafting Exceptional Experiences: MERN Stack Development Services
              </p>
              
           </div>
          </div>
          <div className=" lg:w-1/2 flex justify-center text-[500px]  animate-slow-spin ">
            <FaReact className='animate-pulse text-blue-600' />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default MernBanner;