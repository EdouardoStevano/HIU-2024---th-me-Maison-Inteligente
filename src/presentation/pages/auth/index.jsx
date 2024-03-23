import React from 'react'
import { Outlet } from 'react-router-dom';

// Importation des composants
import AuthHeader from './components/authHeader'
import AuthFooter from './components/authFooter'

// Importation des styles
import './styles.scss'

function Authentification() {
  return (
    <div className='authentification-container'>
      <div className="authentification-content container">
        <AuthHeader />
          <Outlet />
        <AuthFooter />
      </div>
    </div>
  )
}

export default Authentification