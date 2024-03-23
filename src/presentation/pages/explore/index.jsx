import React, {useRef} from 'react'
import { Outlet } from 'react-router-dom';


import './style.scss'

import ExploreHeader from './layout/header/exploreHeader';
import ExploreFooter from './layout/footer/exploreFooter';
import LeftMenu from './layout/leftShorcut/leftShorcut';
import Weather from './layout/weather/weather';

function Explore() {

  return (
    <div className='super-global-container explore'>
        <div className="head-explore">
          <ExploreHeader />
        </div>

        <div className="content-explore">
          <Outlet />
        </div>

        <div className="float-explore">
          <LeftMenu />
          <Weather />
        </div>

        <div className="foot-explore">
          <ExploreFooter />
        </div>
        
        
    </div>
  )
}

export default Explore
