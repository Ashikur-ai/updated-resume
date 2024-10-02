import React from 'react';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet-async';
import { MdDesignServices } from 'react-icons/md';

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Overview</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 w-11/12 mx-auto">
        
        <div className=" bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-4 rounded-lg flex  justify-around items-center">
          <div className="">
            <MdDesignServices className='text-7xl' />
            <p className='text-3xl'>Services</p>
          </div>
          <p className="text-5xl font-semibold">
            <CountUp end={100}/>
          </p>
        </div>

        <div className=" bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-4 rounded-lg flex  justify-around items-center">
          <div className="">
            <MdDesignServices className='text-7xl' />
            <p className='text-3xl'>Services</p>
          </div>
          <p className="text-5xl font-semibold">100</p>
        </div>


        <div className=" bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-4 rounded-lg flex  justify-around items-center">
          <div className="">
            <MdDesignServices className='text-7xl' />
            <p className='text-3xl'>Services</p>
          </div>
          <p className="text-5xl font-semibold">100</p>
        </div>


        <div className=" bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-4 rounded-lg flex  justify-around items-center">
          <div className="">
            <MdDesignServices className='text-7xl' />
            <p className='text-3xl'>Services</p>
          </div>
          <p className="text-5xl font-semibold">100</p>
        </div>

        <div className=" bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-4 rounded-lg flex  justify-around items-center">
          <div className="">
            <MdDesignServices className='text-7xl' />
            <p className='text-3xl'>Services</p>
          </div>
          <p className="text-5xl font-semibold">100</p>
        </div>

        <div className=" bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-4 rounded-lg flex  justify-around items-center">
          <div className="">
            <MdDesignServices className='text-7xl' />
            <p className='text-3xl'>Services</p>
          </div>
          <p className="text-5xl font-semibold">100</p>
        </div>

        

        

       
      </div>
    </div>
  );
};

export default Dashboard;