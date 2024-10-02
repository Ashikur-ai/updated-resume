import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/clientSide/Navbar';
import Footer from '../components/clientSide/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    )
}

export default MainLayout;