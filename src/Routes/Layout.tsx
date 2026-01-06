import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Head from '../Component/Head';
import Foot from '../Component/Foot';

const Layout = () => {
    const navigate= useNavigate();
  return (
    <>
    <Head/>
    <Outlet/>
    <Foot/>
    </>
    

  )
}

export default Layout