import React from 'react'
import { Outlet } from 'react-router-dom';

import './style.scss'

import ExploreHeader from './layout/header/exploreHeader';
import ExploreFooter from './layout/footer/exploreFooter';
import LeftMenu from './layout/leftShorcut/leftShorcut';
import Weather from './layout/weather/weather';

function Explore() {
  return (
    <div className='super-global-container explore'>
        <ExploreHeader />
        <LeftMenu />
        <ExploreFooter />
        <Weather />
        <Outlet />
    </div>
  )
}

export default Explore
