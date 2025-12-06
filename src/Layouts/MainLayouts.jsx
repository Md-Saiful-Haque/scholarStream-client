import React from 'react';
import Navbar from '../components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer />
            
        </div>
    );
};

export default MainLayouts;