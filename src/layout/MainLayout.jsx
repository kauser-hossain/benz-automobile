import Navbar from '@/component/common/navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <footer>
                <h1>this is footer</h1>
            </footer>
        </div>
    );
};

export default MainLayout;