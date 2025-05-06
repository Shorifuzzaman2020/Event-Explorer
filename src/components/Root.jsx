
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { UserProvider } from '../UserContext';

const Root = () => {
    return (
        <UserProvider>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </UserProvider>
    );
};

export default Root;
