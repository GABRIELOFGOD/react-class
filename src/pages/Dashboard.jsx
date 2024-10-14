import React from 'react'
import Sidebars from '../components/dashboard/Sidebars'
import DashboardHead from '../components/dashboard/DashboardHead'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <div className="flex flex-1"><Sidebars /></div>
      <div className='flex-[6]'>
        <DashboardHead />
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard