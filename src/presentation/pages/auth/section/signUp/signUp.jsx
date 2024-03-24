// import React, { useState as state} from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// // styles importation
// import './__signUpStyle.scss'

// // Assets importation
// import mailIcon from 'presentation/assets/icon/png/icons8_email_sign_60px_1.png'
// import passwordIcon from 'presentation/assets/icon/png/icons8_good_pincode_60px.png'
// import doneIcon from 'presentation/assets/icon/png/icons8_ok_60px.png'
// import cancelIcon from 'presentation/assets/icon/png/icons8_cancel_60px.png'
// import loadIcon from 'presentation/assets/icon/png/icons8_stream_60px.png'
// import SignUpImage from 'presentation/assets/branding/SignUp_Image.png'
// import { toast } from 'react-toastify';

// function SignUp() {
//   const [inputText, setInputText] = state('');
//   const [selectedEmoji, setSelectedEmoji] = state(null);
//   const [text, setText] = state('');
//   const [isValid, setIsValid] = state(false);
//   const [isLoading, setIsLoading] = state(false);

//   const nav = useNavigate()

//   const handleEmojiClick = (emoji) => {
//     setSelectedEmoji(emoji);
//     setInputText((prevInputText) => prevInputText + emoji.emoji);
//   };

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleChange = (e) => {
//     const inputText = e.target.value;
//     setText(inputText);

//     setIsLoading(true);

//     setTimeout(() => {
//       const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
//       setIsValid(emailPattern.test(inputText));

//       setIsLoading(false);
//     }, 1000); 
//   };

//   const handleCancelClick = () => {
//     setText('');
//   };

//   return (
//     <div className='SignUp2 MiddleContent'>
//       <div className="signIn-right">
//         <img src={SignUpImage} alt={"SignUp Illustration"} width={'500px'}/>
//       </div>

//       <div className="signIn-left">
//         <h1>Inscrivez vous</h1>
//         <span>Faite partie de la communauté!</span>
//         <p>La porte vers l'apprentissage en ligne de demain. Connectez-vous pour explorer un univers de connaissances infini.</p>

//         <div className="signForm-overflow">
//         <div className="signForm">
//             <div className="inputform">
//                 <div className="input-content">
//                   <img src={mailIcon} alt="email icon" width={"20px"}/>
//                   <input type="text" value={text} placeholder='Adresse email' onChange={handleChange}/>

//                   {isLoading && (
//                   <img
//                     src={loadIcon}
//                     alt="Indicator"
//                     width="30px"
//                     className="authLoadIcon"
//                   />
//                 )}
//                 {text && !isLoading && (
//                   isValid ? (
//                     <img
//                       src={doneIcon}
//                       alt="Indicator"
//                       width="30px"
//                     />
//                   ) : (
//                     <img
//                       src={cancelIcon}
//                       alt="Indicator"
//                       width="30px"
//                       onClick={handleCancelClick}
//                     />
//                   )
//                 )}
                              
//                 </div>
                
//             </div>

//             <div className="inputform">
//                 <div className="input-content">
//                   <img src={mailIcon} alt="email icon" width={"20px"}/>
//                   <input type="text" value={text} placeholder='Adresse email' onChange={handleChange}/>

//                   {isLoading && (
//                   <img
//                     src={loadIcon}
//                     alt="Indicator"
//                     width="30px"
//                     className="authLoadIcon"
//                     data-tip="Chargement en cours"
//                     data-for="loadingTooltip"
//                   />
//                 )}
//                 {text && !isLoading && (
//                   isValid ? (
//                     <img
//                       src={doneIcon}
//                       alt="Indicator"
//                       width="30px"
//                       data-tip="Adresse e-mail valide"
//                       data-for="validTooltip"
//                     />
//                   ) : (
//                     <img
//                       src={cancelIcon}
//                       alt="Indicator"
//                       width="30px"
//                       onClick={handleCancelClick}
//                       data-tip="Adresse e-mail invalide"
//                       data-for="invalidTooltip"
//                     />
//                   )
//                 )}
                              
//                 </div>
                
//             </div>
//             <div className="inputform">
//                 <div className="input-content">
//                   <img src={passwordIcon} alt="password icon" width={"20px"}/>
//                   <input type="password" placeholder='Mot de passe'/>
//                   {/* <img src={cancelIcon} alt="Indicator" width={"20px"}/> */}
//                 </div>
//             </div>
//         </div>
//         </div>

//         <div className="btn-signForm">
//           <div className="remreber-check">
//             <input type="checkbox" name="remenber" id="remenber" />
//             <label htmlFor="remenber">J'accepte les termes et conditions d'utilisations ainsi que le politique de confidentialité</label>
//           </div>
//         </div>

//         <div className="btn-group">
//           <Link to="/auth" className='btn-signUp'>j'ai déjà un compte</Link>
//           <button type="button" className='btn-login'>s'inscrire</button>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default SignUp

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// styles importation
import './__signUpStyle.scss';

// Assets importation
import mailIcon from 'presentation/assets/icon/png/icons8_email_sign_60px_1.png';
import passwordIcon from 'presentation/assets/icon/png/icons8_good_pincode_60px.png';
import doneIcon from 'presentation/assets/icon/png/icons8_ok_60px.png';
import cancelIcon from 'presentation/assets/icon/png/icons8_cancel_60px.png';
import loadIcon from 'presentation/assets/icon/png/icons8_stream_60px.png';
import SignUpImage from 'presentation/assets/branding/SignUp_Image.png';
import { toast } from 'react-toastify';

// Ce composant pourrait être réutilisé pour d'autres entrées si nécessaire
function EmailInput({ value, onChange, isLoading, isValid }) {
  const handleCancelClick = () => onChange({ target: { value: '' } });
  return (
    <div className="inputform">
      <div className="input-content">
        <img src={mailIcon} alt="email icon" width={"20px"}/>
        <input type="email" value={value} placeholder='Adresse email' onChange={onChange}/>
        {isLoading && (
          <img
            src={loadIcon}
            alt="Chargement en cours"
            width="30px"
            className="authLoadIcon"
          />
        )}
        {value && !isLoading && (
          isValid ? (
            <img
              src={doneIcon}
              alt="Adresse e-mail valide"
              width="30px"
            />
          ) : (
            <img
              src={cancelIcon}
              alt="Adresse e-mail invalide"
              width="30px"
              onClick={handleCancelClick}
            />
          )
        )}
      </div>
    </div>
  );
}

function SignUp() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();

  const handleChange = (e) => {
    const inputText = e.target.value;
    setEmail(inputText);

    setIsLoading(true);

    setTimeout(() => {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      setIsValid(emailPattern.test(inputText));

      setIsLoading(false);
    }, 1000); 
  };

  return (
    <div className='SignUp2 MiddleContent'>
      <div className="signIn-right">
        <img src={SignUpImage} alt={"SignUp Illustration"} width={'500px'}/>
      </div>

      <div className="signIn-left">
        <h1>Inscrivez-vous</h1>
        <span>Faite partie de la communauté!</span>
        <p>La porte vers l'apprentissage en ligne de demain. Connectez-vous pour explorer un univers de connaissances infini.</p>

        <div className="signForm-overflow">
          <div className="signForm">
            <EmailInput value={email} onChange={handleChange} isLoading={isLoading} isValid={isValid} />
            {/* Ajouter d'autres champs de formulaire ici si nécessaire */}
          </div>
        </div>

        {/* Boutons et autres éléments de formulaire */}
      </div>
    </div>
  );
}

export default SignUp;
