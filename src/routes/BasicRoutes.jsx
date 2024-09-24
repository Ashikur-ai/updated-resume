
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/clientSide/homePage/HomePage';
import ContactUs from '../pages/clientSide/contactUs/ContactUs';
import ServicePage from '../pages/clientSide/servicesPage/ServicePage';
import AboutUsPage from '../pages/clientSide/aboutUs/AboutUsPage';
import ProjectPage from '../pages/clientSide/projectPage/ProjectPage';
import MERNServices from '../pages/clientSide/servicesPage/mern/MERNServices';
import LaravelServices from '../pages/clientSide/servicesPage/laravel/LaravelServices';
import WordpressServices from '../pages/clientSide/servicesPage/wordpress/WordpressServices';

const router = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"/contact-us",
            element: <ContactUs></ContactUs>
        },
        {
          path: "/services",
          element: <ServicePage></ServicePage>
        },
        {
          path: "/mern-services",
          element: <MERNServices></MERNServices>
        },
        {
          path: "/laravel-services",
          element: <LaravelServices></LaravelServices>
        },
        {
          path: "/wordpress-services",
          element: <WordpressServices></WordpressServices>
        },
        {
          path: "/about",
          element: <AboutUsPage></AboutUsPage>
        },
        {
          path: "/project",
          element: <ProjectPage></ProjectPage>
        }
      ]
    }
   
  ]); 

export default router;