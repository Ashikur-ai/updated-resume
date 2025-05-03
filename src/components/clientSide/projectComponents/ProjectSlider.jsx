// components/ProjectSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// data/projects.js
const projects = [
  {
    id: 1,
    title: 'LearnDeck',
    description: 'A full-featured LMS with Clerk Auth and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Clerk', 'Stripe'],
    live: 'https://learn-deck.vercel.app',
    github: 'https://github.com/yourname/learn-deck',
    image: '/images/learn-deck.png',
  },
  {
    id: 2,
    title: 'Postify',
    description: 'A social media app built using Appwrite, React, and Tailwind.',
    tech: ['React', 'Appwrite', 'Tailwind', 'React Query'],
    live: 'https://postify.vercel.app',
    github: 'https://github.com/yourname/postify',
    image: '/images/postify.png',
  },
  {
    id: 3,
    title: 'StreamNest',
    description: 'A YouTube clone with Next.js 15, tRPC, and Mux integration.',
    tech: ['Next.js', 'tRPC', 'Mux', 'Tailwind'],
    live: 'https://streamnest.vercel.app',
    github: 'https://github.com/yourname/streamnest',
    image: '/images/streamnest.png',
  },
  {
    id: 1,
    title: 'LearnDeck',
    description: 'A full-featured LMS with Clerk Auth and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Clerk', 'Stripe'],
    live: 'https://learn-deck.vercel.app',
    github: 'https://github.com/yourname/learn-deck',
    image: '/images/learn-deck.png',
  },
  {
    id: 2,
    title: 'Postify',
    description: 'A social media app built using Appwrite, React, and Tailwind.',
    tech: ['React', 'Appwrite', 'Tailwind', 'React Query'],
    live: 'https://postify.vercel.app',
    github: 'https://github.com/yourname/postify',
    image: '/images/postify.png',
  },
  {
    id: 3,
    title: 'StreamNest',
    description: 'A YouTube clone with Next.js 15, tRPC, and Mux integration.',
    tech: ['Next.js', 'tRPC', 'Mux', 'Tailwind'],
    live: 'https://streamnest.vercel.app',
    github: 'https://github.com/yourname/streamnest',
    image: '/images/streamnest.png',
  },
];


import ProjectCard from './ProjectCard';

const ProjectSlider = () => {
  return (
    <div className="py-10 px-4  mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  );
};

export default ProjectSlider;
