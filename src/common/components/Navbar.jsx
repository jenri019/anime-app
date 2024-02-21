import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 d-flex flex-column justify-content-start align-items-start">
          
          <Link 
              className="navbar-brand" 
              to="/"
          >
              Anime App
          </Link>

          <div className="navbar-nav d-flex flex-column">
            <NavLink
                className={({isActive}) => { return `nav-link ${isActive ? 'active': ''}` }} 
                to="/anime"
            >
                Anime
            </NavLink>

            <NavLink 
                className={({isActive}) => { return `nav-link ${isActive ? 'active': ''}` }}
                to="/character"
            >
                Personajes
            </NavLink>

            {
            <NavLink 
                className={({isActive}) => { return `nav-link ${isActive ? 'active': ''}` }}
                to="/genres"
            >
                Generos
            </NavLink>
            }

            <NavLink 
                className={({isActive}) => { return `nav-link ${isActive ? 'active': ''}` }}
                to="/manga"
            >
                Manga
            </NavLink>
            </div>
      </nav>
    </>
  )
}
