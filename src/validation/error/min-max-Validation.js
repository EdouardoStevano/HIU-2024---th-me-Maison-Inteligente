export const validateMinMaxLength = (value, fieldName, minLength, maxLength) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length < minLength) {
      return `Le champ ${fieldName} doit contenir au moins ${minLength} caractères.`;
    } else if (trimmedValue.length > maxLength) {
      return `Le champ ${fieldName} ne peut pas dépasser ${maxLength} caractères.`;
    } else {
      return '';
    }
  };
  