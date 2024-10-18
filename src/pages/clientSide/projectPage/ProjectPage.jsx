import React from 'react';
import Service from '../homePage/Service';

const ProjectPage = () => {
  return (
    <div className='bg-black rounded-t-xl mt-4'>
      <p className='text-white text-center text-5xl py-3'>My projects</p>
      <Service></Service>
    </div>
  );
};

export default ProjectPage;