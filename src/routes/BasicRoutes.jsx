
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
import DashboardLayout from '../layouts/DashboardLayout';
import ManageServices from '../pages/adminSide/services/ManageServices';
import ManageProjects from '../pages/adminSide/projects/ManageProjects';
import Dashboard from '../pages/adminSide/dashboard/Dashboard';
import UpdateServicePage from '../pages/adminSide/services/UpdateServicePage';
import ManageTestimonial from '../pages/adminSide/testimonial/ManageTestimonial';
import UpdateTestimonialPage from '../pages/adminSide/testimonial/UpdateTestimonialPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/contact-us",
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
  },

  // Dashboard related layouts 
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      // service related routes 
      {
        path: "services",
        element: <ManageServices></ManageServices>
      },
      {
        path: "update-service/:id",
        element: <UpdateServicePage></UpdateServicePage>
      },
      {
        path: "projects",
        element: <ManageProjects></ManageProjects>
      },
      // testimonial related routes
      {
        path: "testimonial",
        element: <ManageTestimonial></ManageTestimonial>
      },
      {
        path: "update-testimonial/:id",
        element: <UpdateTestimonialPage></UpdateTestimonialPage>
      }
      
    ]
  }



]);

export default router;