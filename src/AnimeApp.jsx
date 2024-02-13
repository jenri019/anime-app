import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './common/components/Navbar'
import { CommonProvider } from './common/context'

export const AnimeApp = () => {
    return (
      <div className='d-flex'>
        <Navbar />
        
        <CommonProvider>
          <div className='info-container'>
            <Outlet />
          </div>
        </CommonProvider>
      </div>
    )
  }