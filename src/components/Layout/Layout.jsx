import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex w-full h-screen bg-white'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout
