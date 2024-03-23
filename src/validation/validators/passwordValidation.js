export const validatePassword = (password) => {
    if (!password) {
      return 'Veuillez saisir un mot de passe.';
    } else if (password.length < 6) {
      return 'Le mot de passe doit contenir au moins 6 caractères.';
    } else {
      return '';
    }
  };
  