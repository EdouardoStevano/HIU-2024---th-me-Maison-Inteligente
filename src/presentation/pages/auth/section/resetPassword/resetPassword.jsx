import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// helpers import
import './__resetPassword.scss'

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  return (
    <div className="resetPassword_container">
      {!showVerification && !showResetForm && (
        <div className="resetPassword_item">
          <div>
          <h2 className="resetPassword_title">Réinitialisation de mot de passe</h2>
          <small>Entrer votre Adresse email afin qu nous puissons vous envoyer une code de verification, qui est une code d'accès pour pouvoir reinitialiser votre mot de passe</small>
          <form>
            <div className="email_verify">
              <input
                type="text"
                placeholder="Entrez votre adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="resetPassword-btn">
              Envoyer
            </button>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
          </form>
        </div>
        </div>
      )}

      {showVerification && !showResetForm && (
        <div className="resetPassword_item">
          <div>
          <h2 className="resetPassword_title">Vérification du code</h2>
          <form>
            <div className="email_verify">
              <input
                type="text"
                placeholder="Entrez le code de vérification"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button type="submit" className="resetPassword_btn">
              Valider
            </button>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
          </form>
          </div>
        </div>
      )}

      {showResetForm && (
        <div className="resetPassword_item">
          <div>
          <h2 className="resetPassword_title">Changement de mot de passe</h2>
          <form>
            <div className="email_verify">
              <input
                type="password"
                placeholder="Nouveau mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="email_verify">
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="resetPassword_btn">
              Changer le mot de passe
            </button>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
          </form>
        </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;