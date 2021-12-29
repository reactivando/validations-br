export const validateCep = (() => {
  const regex = /^([\d]{8}|[\d]{5}-[\d]{3})$/;

  return (cep: string) => typeof cep === 'string' && regex.test(cep);
})();
