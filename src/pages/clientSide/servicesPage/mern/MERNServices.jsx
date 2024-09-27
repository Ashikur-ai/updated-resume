import React from 'react';
import MernBanner from './MernBanner';
import ServiceSection from './ServiceSection';
import ChooseMeSection from './ChooseMeSection';
import CardComponents from '../components/CardComponents';
import MernProjects from './MernProjects';
import MobileViewMernProjects from './MobileViewMernProjects';


const MERNServices = () => {
  window.scrollTo(0, 0);
  return (
    <div className='container mx-auto mt-5'>
      <MernBanner></MernBanner>
      <div className="hidden lg:block">
        <MernProjects></MernProjects>
      </div>
      <div className="lg:hidden">
        <MobileViewMernProjects></MobileViewMernProjects>
      </div>

      <ServiceSection></ServiceSection>
      <ChooseMeSection></ChooseMeSection>



    </div>
  );
};

export default MERNServices;