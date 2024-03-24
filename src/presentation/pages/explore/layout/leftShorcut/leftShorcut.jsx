import React, { useEffect, useState } from "react";
import "./leftShorcut.scss";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardMunicipales from "./component/card/CardMunicipales";
import ModalIA from "presentation/components/component/modal/myModalLarge";

import img from "../../../../assets/branding/img/480x320/img10.jpg";
import img20 from "../../../../assets/branding/img/480x320/img20.jpg";
import img16 from "../../../../assets/branding/img/480x320/img16.jpg";
import img29 from "../../../../assets/branding/img/480x320/img16.jpg";
import img25 from "../../../../assets/branding/img/480x320/img25.jpg";
import securite from "../../../../assets/branding/img/480x320/securite.png";
import img11 from "../../../../assets/branding/img/480x320/img11.jpg";
import img36 from "../../../../assets/branding/img/480x320/img36.jpg";
import axios from "axios";
function SpeedLink() {
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isXExpanded, setIsXExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLargeModal, setShowLargeModal] = useState(false);


  const toggleX = () => {
    setIsXExpanded(!isXExpanded);
  };

  const line1Style = isXExpanded ? { transform: "rotate(45deg)" } : {};
  const line2Style = isXExpanded
    ? { transform: "rotate(-45deg)", height: "16px" }
    : {};
  const line3Style = isXExpanded ? { opacity: "0", dipslay: "none" } : {};

  const handleMouseOver = () => {
    toggleX();
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  const [sensorData, setSensorData] = useState(null);

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/arduino', {
          method: 'GET',
          mode: 'cors', // Assurez-vous d'ajouter cette option
          headers: {
            'Content-Type': 'application/json',
            // Autres en-têtes si nécessaire
          },
        })
        const data = await response.json();
        setSensorData(data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    // Appeler fetchData initialement
    fetchData();

    // Mettre en place l'intervalle pour actualiser les données toutes les 5 secondes
    const interval = setInterval(fetchData, 5000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);
  */

  // For large modal
    const openLargeModal = () => {
    setShowLargeModal(true);
    };

    const closeLargelModal = () => {
        setShowLargeModal(false);
    };

  const Municipales = [
    {
      image: img29,
      title: "Services administratifs",
    },
    {
      image: img20,
      title: "Service des Affaires Générales",
    },
    {
      image: img25,
      title: "Service des Finances",
    },
    {
      image: img,
      title: "Service de l’Urbanisme",
    },
    {
      image: securite,
      title: "Service de la Sécurité",
    },
    {
      image: img11,
      title: "Service de l’Etat Civil",
    },
    {
      image: img16,
      title: "Service de la Population",
    },
    {
      image: img36,
      title: "Service de la Santé",
    },
  ];
  const [openDialog, SetOpenDialog] = useState(false);

  const handleclickDialogMunicipale = () => {
    SetOpenDialog(!openDialog);
  };
  const handleCloseDialogMunicipale = () => {
    SetOpenDialog(false);
  };

  return (
    <div>
      <div className={`speedLink-container`}>
        <div className={`link-button`}>
          <span onClick={handleMouseOver}>menu</span>

          <div className="x-container" onClick={handleMouseOver}>
            <div className="x-line line1" style={line1Style}></div>
            <div className="x-line line3" style={line3Style}></div>
            <div className="x-line line2" style={line2Style}></div>
          </div>
        </div>

        <div className={`speedLink-menu ${isMenuVisible ? "active" : ""}`}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 close-speedLink"
              onClick={handleMouseOver}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div className={"speedLink-content"}>
              <div className="globalMap">
                <div className="globalMap-content">
                  <h1>Moderniser votre vie quotidien</h1>
                  <small>
                    Naviguer à travers notre carte de la ville bien dataillé,
                    consulter votre destination avant même de s'y rendre.
                  </small>
                  <Link to={"/maps"} className="btn-explore">
                    Explorer
                  </Link>
                </div>
              </div>

              {/* <h1>Mes capteurs :</h1> */}
              <div className="capterCard">
                <div className="capterCard-container">
                  <h1>Données du capteur</h1>
                  <div className="capterCard-card">
                    {sensorData && (
                      <div>
                        <h2>Température</h2>
                        <p>{sensorData.temperature} °C</p>
                      </div>
                    )}
                  </div>
                  <div className="card">
                    {sensorData && (
                      <div>
                        <h2>Humidité</h2>
                        <p>{sensorData.humidity} %</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <small>Options :</small>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedLink;
