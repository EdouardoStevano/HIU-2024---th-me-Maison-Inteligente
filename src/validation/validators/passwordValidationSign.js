export const validatePasswordSignUp = (password) => {
    if (!password) {
      return 'Veuillez saisir un mot de passe.';
    } else if (password.length < 8) {
      return 'Le mot de passe doit contenir au moins 8 caractères.';
    } else if (!/(?=.*[a-z])/.test(password)) {
      return 'Le mot de passe doit contenir au moins une lettre minuscule.';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return 'Le mot de passe doit contenir au moins une lettre majuscule.';
    } else if (!/(?=.*\d)/.test(password)) {
      return 'Le mot de passe doit contenir au moins un chiffre.';
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      return 'Le mot de passe doit contenir au moins un caractère spécial.';
    } else {
      return '';
    }
  };
  