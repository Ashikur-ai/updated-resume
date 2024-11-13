import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/clientSide/Navbar';
import Footer from '../components/clientSide/Footer';
import { Toaster } from 'react-hot-toast';
import NavBarDrawer from '../components/clientSide/NavBarDrawer';

const MainLayout = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <Navbar></Navbar>
          

            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    )
}

export default MainLayout;