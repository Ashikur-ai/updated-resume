import React from 'react';
import MernBanner from './mern/MernBanner';
import MernProjects from './mern/MernProjects';
import MobileViewMernProjects from './mern/MobileViewMernProjects';
import ServiceSection from './mern/ServiceSection';
import ChooseMeSection from './mern/ChooseMeSection';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ServicePage = () => {
  window.scrollTo(0, 0);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  // service 
  const { data: service = {} } = useQuery({
    queryKey: ['service'],
    queryFn: async () => {
      const res = await axiosPublic(`/service/${id}`);
      return res.data;
    }
  })
  // console.log(service);

  // projects by service 
  const { data: projects = [] } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await axiosPublic.get('/project');
      return res.data;
    }
  })
  // console.log(projects);
  const filteredProjects = projects.filter(project => project.service_id === id);
  console.log(filteredProjects);

  return (
    <div className='container mx-auto mt-5'>
      <MernBanner service={service}></MernBanner>
      <div className="hidden lg:block">
        <MernProjects filteredProjects={filteredProjects}></MernProjects>
      </div>
      <div className="lg:hidden">
        <MobileViewMernProjects filteredProjects={filteredProjects}></MobileViewMernProjects>
      </div>

      <ServiceSection></ServiceSection>
      <ChooseMeSection></ChooseMeSection>



    </div>
  );
};

export default ServicePage;