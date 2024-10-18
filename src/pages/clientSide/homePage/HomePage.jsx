
import Banner from './Banner'
import BlogPost from './BlogPost'
import Discus from './Discus'
import HireMe from './HireMe'
import MyResult from './MyResult'
import Portfolio from './Portfolio'

import Service from './Service'
import Skills from './Skills'
import WorkExperience from './WorkExperience'

const HomePage = () => {
  return (
    <div className=' '>
      <Banner></Banner>
      <Service></Service>
      <WorkExperience></WorkExperience>
      <Skills></Skills>
      <HireMe></HireMe>
      {/* <Portfolio></Portfolio> */}
      <MyResult></MyResult>
      <Discus></Discus>
      {/* <BlogPost></BlogPost> */}
     
       
    </div>
  )
}

export default HomePage