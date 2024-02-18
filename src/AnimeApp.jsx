import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './common/components/Navbar'

export const AnimeApp = () => {
    return (
      <div className='d-flex'>
        <Navbar />
        
        <div className='info-container'>
          <Outlet />
        </div>
      </div>
    )
  }