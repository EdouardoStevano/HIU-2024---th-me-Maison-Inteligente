export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Veuillez saisir une adresse e-mail.';
    } else if (!regex.test(email)) {
      return 'Veuillez saisir une adresse e-mail valide.';
    } else {
      return '';
    }
  };
  