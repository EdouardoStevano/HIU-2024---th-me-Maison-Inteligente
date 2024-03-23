export const validateRequiredField = (value, fieldName) => {
    if (!value || value.trim() === '') {
      return `Le champ ${fieldName} est requis.`;
    } else {
      return '';
    }
  };
  