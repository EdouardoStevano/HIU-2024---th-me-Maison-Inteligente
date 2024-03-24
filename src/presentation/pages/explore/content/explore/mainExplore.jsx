import React, { useState, lazy, Suspense, useRef  } from "react";
// import Spline from "@splinetool/react-spline";

import "./mainExplore.scss";

import loadingData from 'presentation/components/component/loadingData/loadingData'
import FloatButton from "./components/flloatBtn"; 


const Spline = lazy(() => import('@splinetool/react-spline'));


function MainExplore() {

  const testAnim1 = useRef();
  const testAnim2 = useRef();

  const floatButtonsData = [
    {
      id: 1,
      title: "Button 1",
      statusColor: "#ff0000", // couleur rouge
      content: "Contenu du bouton 1",
      positionX: "670px",
      positionY: "500px"
    },
    {
      id: 2,
      title: "Climatisation",
      statusColor: "#00ff00", // couleur verte
      content: "Contenu du bouton 2",
      positionX: "500px",
      positionY: "500px"
    },
    // Ajoutez plus d'objets de données au besoin
  ];

  const cameraView = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('4dab05be-b91c-468e-9285-f79958021e3b');

    cameraView.current = obj;
  }

  function move2DCamera() {
    cameraView.current.position.x += -190.83;
    // cameraView.current.position.y = 1040.50;
    // cameraView.current.position.z = 138.71;
    // cameraView.current.rotation.x = -87.91;
    // cameraView.current.rotation.y = -0.34;
    // cameraView.current.rotation.z = 178.54;
  }

  function move3DCamera() {
    cameraView.current.position.x += 161.00;
    // cameraView.current.position.y = 854.18;
    // cameraView.current.position.z = -969.36;
    // cameraView.current.rotation.x = -136.19;
    // cameraView.current.rotation.y = 17.09;
    // cameraView.current.rotation.z = 164.26;
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
              <button className={view3D ? 'active' : ''} onClick={move3DCamera}>3D</button>
              <button className={!view3D ? 'active' : ''} onClick={move2DCamera}>2D</button>
            </div>
          </div>
            
                  
        <div className="cityExplore">
        <div className="float-status">
              {floatButtonsData.map(button => (
                <FloatButton
                  key={button.id}
                  title={button.title}
                  statusColor={button.statusColor}
                  content={button.content}
                  positionX={button.positionX}
                  positionY={button.positionY}
                />
              ))} 
            </div>

          <Suspense fallback={<div>loadingData</div>}>
            {/* <Spline scene="https://prod.spline.design/O4TqeLAlb3FpxcfI/scene.splinecode" className="house" onLoad={onLoad}/> */}
            {/* <Spline scene="https://prod.spline.design/uAQq7dUAAi5RLLkq/scene.splinecode" onLoad={onLoad} /> */}
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
