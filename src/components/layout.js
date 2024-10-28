import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <div className='bg-zinc-200'>
            <Header />
            <main className='w-[1200px] max-w-full m-auto p-5'>
                {children}
            </main>
        </div>
    );
};

export default Layout;