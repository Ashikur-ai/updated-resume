
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/clientSide/homePage/HomePage';
import ContactUs from '../pages/clientSide/contactUs/ContactUs';
import ServicePage from '../pages/clientSide/servicesPage/ServicePage';
import AboutUsPage from '../pages/clientSide/aboutUs/AboutUsPage';
import ProjectPage from '../pages/clientSide/projectPage/ProjectPage';
import DashboardLayout from '../layouts/DashboardLayout';
import ManageServices from '../pages/adminSide/services/ManageServices';
import ManageProjects from '../pages/adminSide/projects/ManageProjects';
import Dashboard from '../pages/adminSide/dashboard/Dashboard';
import UpdateServicePage from '../pages/adminSide/services/UpdateServicePage';
import AdminLoginForm from '../pages/clientSide/login/AdminLoginForm';
import PrivateRoute from './PrivateRoute';
import UpdateProject from '../pages/adminSide/projects/UpdateProject';
import ManageSkillsPage from '../pages/adminSide/skills/ManageSkillsPage';
import UpdateSkillPage from '../pages/adminSide/skills/UpdateSkillPage';
import ManageTestimonials from '../pages/adminSide/testimonial/ManageTestimonials';
import TestimonialUpdateForm from '../pages/adminSide/testimonial/TestimonialUpdateForm';
import SkillDetails from '../pages/clientSide/skillRelatedPages/skillDetails/SkillDetails';
import ManageSkillProject from '../pages/adminSide/skillsProjects/ManageSkillProject';
import UpdateSkillProject from '../pages/adminSide/skillsProjects/UpdateSkillProject';
import StackOverFlowPage from '../pages/clientSide/stackOverflow/StackOverFlowPage';
import StackDetailsPage from '../pages/clientSide/stackOverflow/StackDetailsPage';
import ManageStackOverflowPage from '../pages/adminSide/stackOverflow/ManageStackOverflowPage';
import UpdateStack from '../pages/adminSide/stackOverflow/UpdateStack';

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
        path: "/about",
        element: <AboutUsPage></AboutUsPage>
      },
      {
        path: "/project",
        element: <ProjectPage></ProjectPage>
      },
      {
        path: "/service/:id",
        element: <ServicePage></ServicePage>
      },
      // skill related pages 
      {
        path: "/skill-details/:id",
        element: <SkillDetails></SkillDetails>
      },
      // StackOverflow related pages 
      {
        path: "/stack-overflow",
        element: <StackOverFlowPage></StackOverFlowPage>
      },
      {
        path: "/stack-details/:id",
        element: <StackDetailsPage></StackDetailsPage>
      }
    ]
  },

  {
    path: "/admin-login",
    element: <AdminLoginForm></AdminLoginForm>
  },

  // {
  //   path: "/admin-register",
  //   element: <AdminRegisterForm></AdminRegisterForm>
  // },

  // Dashboard related layouts 
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
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
        element: <ManageTestimonials></ManageTestimonials>
      },
      {
        path: "update-testimonial/:id",
        element: <TestimonialUpdateForm></TestimonialUpdateForm>
      },

      // project related routes 
      {
        path: "update-project/:id",
        element: <UpdateProject></UpdateProject>
      },

      // skill related routes 
      {
        path: "skills",
        element: <ManageSkillsPage></ManageSkillsPage>
      },
      {
        path: "update-skills/:id",
        element: <UpdateSkillPage></UpdateSkillPage>
      },
      {
        path: "skills-related-project",
        element: <ManageSkillProject></ManageSkillProject>
      },
      {
        path: "update-skill-project/:id",
        element: <UpdateSkillProject></UpdateSkillProject>
      },
      {
        path: "manage-stack",
        element: <ManageStackOverflowPage></ManageStackOverflowPage>
      },
      {
        path: "update-stack/:id",
        element: <UpdateStack></UpdateStack>
      }

    ]
  }



]);

export default router;