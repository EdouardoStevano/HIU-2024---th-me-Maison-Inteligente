import React from 'react';
import { Navigate } from 'react-router-dom';

const defaultConfig = {isExpired : true}

/**
 * Fonction qui verifie si le token est encore valide.
 * Le token n'est valide que pendant 24 heures,
 * donc l'utilisateur doit se connecter tous les jours
 */
function authVerify() {
    const defaultConfig = {
        tokenReceivedAt: null,
        tokenExpiredAt: 86400,
        isExpired: false
    };

    const config = JSON.parse(localStorage.getItem("config"));
    const { tokenReceivedAt, tokenExpiredAt, isExpired, token } = config || defaultConfig;
    const now = new Date();

    if(token==undefined) {
        return false
    }

    if (tokenReceivedAt && tokenExpiredAt) {
        if (!isExpired && Date.parse(tokenReceivedAt) + tokenExpiredAt * 1000 > now.getTime()) {
            return true; 
        }
    }

    localStorage.setItem("config", JSON.stringify({ ...defaultConfig, tokenReceivedAt: now }));
    return false; 
}


/**
 * Ce composant verifie si un token existe dans le cache, en
 * appelant la fonction authVerify, ensuite elle verifie s'il est 
 * encore valide
 */
const ProtectedRoute = ({children}) => {
    let isAuthentificated = authVerify()
    return(
        isAuthentificated ? children : <Navigate to="/"/>
    )
}

export default ProtectedRoute;