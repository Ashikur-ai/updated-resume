import React from 'react';
import Service from '../homePage/Service';
import Skills from '../homePage/Skills';
import { Helmet } from 'react-helmet-async';

const ProjectPage = () => {
  return (
    <div className='bg-black rounded-t-xl mt-4'>
      <Helmet>
        <title>Ashikur Portfolio | All projects</title>
      </Helmet>
      <p className='text-white text-center text-5xl py-3'>My projects</p>
      <Skills></Skills>

      <Service></Service>
    </div>
  );
};

export default ProjectPage;