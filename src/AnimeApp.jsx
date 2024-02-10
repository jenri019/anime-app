import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './common/components/Navbar'

export const AnimeApp = () => {
    return (
      <div className="d-flex">
        <Navbar />
        <div className='p-3'>
          <Outlet />
        </div>
      </div>
    )
  }