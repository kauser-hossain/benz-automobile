import Navbar from '@/component/common/navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-900'>
            <Navbar/>
            <main >
                <Outlet/>
            </main>
            <footer>
                <h1>this is footer</h1>
            </footer>
        </div>
    );
};

export default MainLayout;