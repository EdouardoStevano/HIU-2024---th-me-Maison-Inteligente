import {React, useState as state, useContext as context, useEffect as effect} from 'react';
import {Link, useNavigate as navigate, useLocation as location, Navigate, useNavigate} from 'react-router-dom';
import { toast} from 'react-toastify';
import axios from "axios";

// importation du styles
import './__signInStyle.scss'

// Assets importation
import mailIcon from 'presentation/assets/icon/png/icons8_email_sign_60px_1.png'
import passwordIcon from 'presentation/assets/icon/png/icons8_good_pincode_60px.png'
import doneIcon from 'presentation/assets/icon/png/icons8_ok_60px.png'
import cancelIcon from 'presentation/assets/icon/png/icons8_cancel_60px.png'
import loadIcon from 'presentation/assets/icon/png/icons8_stream_60px.png'
import SignInImage from 'presentation/assets/branding/Banner.png'
import showeye from 'presentation/assets/icon/svg/showEye.svg';
import hideeye from 'presentation/assets/icon/svg/hideEye.svg';

function SignIn() {
  const [text, setText] = state('');
  const [isValid, setIsValid] = state(false);
  const [isLoading, setIsLoading] = state(false);
  const [showPass, setShowPass] = state(false);
  const [userEmail, setUserEmail] = state('');
  const [credentials, setCredentials] = state({ username: '', password: '' });
  const [userpassword, setUserpassword] = state('');
  const [rememberMe, setRememberMe] = state(false);

    const nav = useNavigate()



  const login = (e) => {
    nav("/explore");
    toast.success("Vous êtes bien connecté")
  };


  // const location = useLocation();
  const redirectPath = localStorage.getItem('urlToAccess') ? localStorage.getItem('urlToAccess') : '/explore' 


  effect(() => {
    const storedEmail = localStorage.getItem('email');
    if(storedEmail != null){
      setUserEmail(storedEmail);
    }else{
      setUserEmail('');
    }
    
  }, []);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };


  const handleChange = (e) => {
    const inputText = e.target.value;
    setUserEmail(inputText);
    setCredentials({ ...credentials, username: inputText })

    setIsLoading(true);

    setTimeout(() => {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      setIsValid(emailPattern.test(inputText));

      setIsLoading(false);
    }, 1000);
  };

  const handleCancelClick = () => {
    setText('');
  };

  const handlePasswordChange = (e) => {
    setUserpassword(e.target.value);
  };

  return (
    <div className='SignUp MiddleContent'>
      <div className="signIn-left">
        <h1>Bienvenue sur RealIT😊</h1>
        <span>un pas de plus vers votre avenir brillant!</span>
        <p>La porte vers l'apprentissage en ligne de demain. Connectez-vous pour explorer un univers de connaissances infini..</p>

        <div className="signForm">
          <div className="inputform">
            <div className="input-content">
              <img src={mailIcon} alt="email icon" width={"20px"} />
              <input type="text" value={userEmail} placeholder='Adresse email' onChange={handleChange} />

              {isLoading && (
                <img
                  src={loadIcon}
                  alt="Indicator"
                  width="30px"
                  className="authLoadIcon"
                  data-tip="Chargement en cours"
                  data-for="loadingTooltip"
                />
              )}
              {text && !isLoading && (
                isValid ? (
                  <img
                    src={doneIcon}
                    alt="Indicator"
                    width="30px"
                    data-tip="Adresse e-mail valide"
                    data-for="validTooltip"
                  />
                ) : (
                  <img
                    src={cancelIcon}
                    alt="Indicator"
                    width="30px"
                    onClick={handleCancelClick}
                    data-tip="Adresse e-mail invalide"
                    data-for="invalidTooltip"
                  />
                )
              )}
            </div>

          </div>
          <div className="inputform">
            <div className="input-content">
              <img src={passwordIcon} alt="password icon" width={"20px"} />
              <input value={userpassword} onChange={handlePasswordChange} type={showPass ? "text" : "password"} placeholder='Mot de passe' />
              <img src={showPass ? showeye : hideeye} alt="done-icon" width='35px' className='showPassword_icon'
                     onClick={() => setShowPass(!showPass)} />
            </div>
          </div>
        </div>

        <div className="btn-signForm">
          <div className="remreber-check">
            <input type="checkbox" checked={localStorage.getItem("email") != null ? 'check' : ''} name="remenber" id="remenber" onChange={handleRememberMeChange}/>
            <label htmlFor="remenber" onChange={handleRememberMeChange}>Se souvenir de moi</label>
          </div>

          <div className="passForget">
            <Link to="/auth/password/reset" className='link-passForget'>Mot de passe oublié?</Link>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/explore" onClick={login}  type="button" className='btn-login'>Se connecter</Link>
          <Link to="/auth/signup" className='btn-signUp'>Créer un compte</Link>
        </div>

      </div>

      <div className="signIn-right">
        <img src={SignInImage} alt={"SignUp Illustration"} width={'550px'} />
      </div>
    </div>
  )
}

export default SignIn