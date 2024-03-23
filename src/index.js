import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "core/config/reportWebVitals";

// Global route importation
import RoutesConfig from "core/routes";

// Global style importation
import "presentation/assets/styles/index.global.scss";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutesConfig />
  </React.StrictMode>
); 

reportWebVitals();
