

import { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'


const Banner = () => {




  const [valueChage, setValueChange] = useState(true)

  const handleIconEnter = () => {
    setValueChange(false)

  }
  const handleIconLeave = () => {
    setValueChange(true)

  }



  return (
    <div className='container mx-auto'>

      {/* text area  */}
      <div className='flex flex-col justify-center mt-20 items-center '>
        <div className="relative w-20">
          <p className='border border-black  py-2.5 px-5 mb-2 rounded-2xl'>Hello!</p>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png" alt="" className='w-5 absolute -top-5 -right-3' />
        </div>
        <div className="relative -z-10">
          <p className='lg:text-7xl md:text-5xl text-4xl text-center font-semibold'>I&apos;m <span className='text-theme_primary'>Ashikur</span>, <br /> FullStack Developer</p>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png" alt="" className='w-12 rotate-180 absolute -bottom-8 -left-7' />
        </div>
      </div>

      {/* image area  */}

      <div className="flex flex-col lg:flex-row gap-4 -mt-16 z-20 px-5 lg:px-0 " >
        <div className=" lg:w-1/4 mt-28 text-center lg:text-start" data-aos="fade-up">
          <FaQuoteLeft className='text-2xl mx-auto lg:mx-0' />
          <p className='text-xl font-bold leading-7 mt-5'>Crafting Scalable Solutions | MERN Developer & Web Development Instructor</p>
        </div>
        <div className="relative lg:w-2/4 ">

          <div className="flex flex-col justify-center items-center" data-aos="zoom-in">
            <div className=' rounded-t-full z-20'>
              <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726681939/Portfolio/maojbedmkvhxyfanhbtz.png" alt="" className='' />
            </div>
            <div className='bg-theme_primary z-10 h-60 lg:h-80 right-0 lg:-mt-[325px] -mt-60 w-11/12 mx-auto rounded-t-full'></div>

            {/* button section  */}


            <div className='bg-white btn btn-glass z-50 lg:-mt-20  lg:px-6  lg:bottom-10 bottom-7 lg:left-32 md:left-36 left-9 inline-block lg:h-20 rounded-[60px]'>
              <div className='flex  gap-3 opacity-[100%] my-4'>
                <Link to={"https://drive.google.com/file/d/1McooBW_qjrTudp97BWw-D6vcESTS60jG/view?usp=sharing"} target='_blank'>
                  <button className='bg-theme_primary lg:px-5 px-3 py-1.5 lg:py-2.5
              rounded-[60px]  lg:text-xl flex items-center gap-2 text-white hover:scale-105 hover:duration-300 hover:delay-100'>Resume <GoArrowUpRight />
                  </button>
                </Link>

                <Link to={"/contact-us"}>
                  <button className='bg-theme_primary px-5 py-1.5 lg:py-2.5
              rounded-[60px]  lg:text-xl flex items-center gap-2 text-white hover:scale-105 hover:duration-300 hover:delay-100'>Hire me <GoArrowUpRight /></button>
                </Link>
              </div>
            </div>


          </div>




        </div>
        <div className="lg:w-1/4 flex   lg:justify-end justify-center lg:mt-28 pb-3 lg:pb-0">
          <div className='text-end'>
            <ReactStars
              count={5}
              color1={'#0eb6f0'}
              size={32}
              color2={'#0eb6f0'} />
            <p className='text-4xl font-bold'>3+ years</p>
            <p className='font-medium'>Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner