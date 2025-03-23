import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.css'; // Create corresponding CSS file
import Header from './Header';

const Layout = () => {
    
  return (
    <div className='layout'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
