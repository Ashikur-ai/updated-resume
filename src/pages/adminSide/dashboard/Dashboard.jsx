import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet-async';
import { MdDesignServices, MdOutlineRateReview } from 'react-icons/md';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const axiosPublic = useAxiosPublic();
  // services 
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic('/service');
      return res.data;
    }
  })

  // testimonials 
  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const res = await axiosPublic('/testimonial');
      return res.data;
    }
  })



 

  return (
    <div>
      <Helmet>
        <title>Dashboard | Overview</title>
      </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-20 w-full sm:w-11/12 mx-auto p-4">

        <Link to="/dashboard/services">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg flex justify-between items-center">
            <div>
              <MdDesignServices className='text-5xl md:text-7xl' />
              <p className='text-2xl md:text-3xl'>Services</p>
            </div>
            <p className="text-4xl md:text-5xl font-semibold">
              <CountUp end={services.length} />
            </p>
          </div>
        </Link>

        <Link to={"/dashboard/testimonial"}>
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg flex justify-between items-center">
            <div>
              <MdOutlineRateReview className='text-5xl md:text-7xl' />
              <p className='text-2xl md:text-3xl'>Testimonials</p>
            </div>
            <p className="text-4xl md:text-5xl font-semibold">{  testimonials.length }</p>
          </div>
        </Link>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg flex justify-between items-center">
          <div>
            <MdDesignServices className='text-5xl md:text-7xl' />
            <p className='text-2xl md:text-3xl'>Services</p>
          </div>
          <p className="text-4xl md:text-5xl font-semibold">100</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg flex justify-between items-center">
          <div>
            <MdDesignServices className='text-5xl md:text-7xl' />
            <p className='text-2xl md:text-3xl'>Services</p>
          </div>
          <p className="text-4xl md:text-5xl font-semibold">100</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg flex justify-between items-center">
          <div>
            <MdDesignServices className='text-5xl md:text-7xl' />
            <p className='text-2xl md:text-3xl'>Services</p>
          </div>
          <p className="text-4xl md:text-5xl font-semibold">100</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg flex justify-between items-center">
          <div>
            <MdDesignServices className='text-5xl md:text-7xl' />
            <p className='text-2xl md:text-3xl'>Services</p>
          </div>
          <p className="text-4xl md:text-5xl font-semibold">100</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
