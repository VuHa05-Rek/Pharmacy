import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import {Outlet} from 'react-router-dom';
import './ContentLayout.css';
const ContentLayout = () =>{
     return (
        <div className="content-layout">
        <Header />   {/*Header nằm cố định trên cùng */}
        <div className="main-layout">
            <Sidebar />   {/* Sidebar bên trái */}
            <main className="content">
            <Outlet />  {/* Nội dung từng trang hiển thị ở đây */}
            </main>
        </div>
        </div>
  );
};
export default ContentLayout