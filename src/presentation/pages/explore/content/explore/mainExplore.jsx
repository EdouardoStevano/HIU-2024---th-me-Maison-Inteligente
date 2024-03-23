import React, { useState, lazy, Suspense, useRef  } from "react";
// import Spline from "@splinetool/react-spline";

import "./mainExplore.scss";

import loadingData from 'presentation/components/component/loadingData/loadingData'

const Spline = lazy(() => import('@splinetool/react-spline'));


function MainExplore() {

  const testAnim1 = useRef();
  const testAnim2 = useRef();

  const cameraView = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('MyCamera');

    cameraView.current = obj;
  }

  function moveObj() {
    cameraView.current.position.x += 10;
  }

  function onLoad(splineApp) {
    // save the app in a ref for later use
    testAnim1.current = splineApp;
  }

  function triggerAnimation() {
    testAnim1.current.emitEvent('keyDown', 'MyCamera');
  }

  const [showExploreTitle, setShowExploreTitle] = useState(true);
  const [view3D, setView3D] = useState(true);

  const toggleExploreTitle = () => {
    setShowExploreTitle(!showExploreTitle);
  };

  const toggleView = () => {
    setView3D(!view3D); // Toggle between 2D and 3D views
  };

  return (
    <div className="middle-explore">
      <div className="middle-explore-content">
        {/* <div className="title-city">
            <h1>Bienvenue sur RealIT </h1>
            <p>
              Vous pouvez naviguer à travers notre RealCity et clique sur le destination que vous voulez. Ci dessous les commandes de navigation.{""}
            </p>
          </div> */}

          <div className="head-exp">
            <span>Visualisation : </span>
            {/* <button type="button" onClick={triggerAnimation}>
              Trigger Spline Animation
            </button> */}

            {/* Switch button for 2D/3D views */}
            <div className="view-switch">
              <button className={view3D ? 'active' : ''} onClick={toggleView}>3D</button>
              <button className={!view3D ? 'active' : ''} onClick={toggleView}>2D</button>
            </div>
          </div>
            
                  
        <div className="cityExplore">
          <Suspense fallback={<div>loadingData</div>}>
            {/* <Spline scene="https://prod.spline.design/O4TqeLAlb3FpxcfI/scene.splinecode" className="house" onLoad={onLoad}/> */}
            <Spline scene="https://prod.spline.design/uAQq7dUAAi5RLLkq/scene.splinecode" onLoad={onLoad} />
          </Suspense>
        </div>
      </div>


      <div className={`exploreTitle ${showExploreTitle ? 'visible' : 'hidden'}`}>

        
{/* 
        <div className="guide-navigation">
          <div className="direction up">
            z <span>haut</span>
          </div>
          <div className="horizontal">
            <div className="direction left">
              q <span>Gauche</span>
            </div>
            <div className="direction right">
              d <span>Droite</span>
            </div>
          </div>

          <div className="direction down">
            s <span>Bas</span>
          </div>
        </div> */}




      </div>
    </div>
  );
}

export default MainExplore;
