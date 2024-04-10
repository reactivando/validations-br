const cepRegex = /^([\d]{8}|[\d]{5}-[\d]{3})$/;

export const validateCep = cepRegex.test.bind(cepRegex);
