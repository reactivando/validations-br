try {
  console.log("Attempting to require 'validations-br'...");
  const { validateCPF, validateCNPJ } = require('validations-br');
  console.log("Successfully required 'validations-br'.");

  const validCpf = '370.785.180-04';
  const invalidCpf = '111.111.111-11';
  const validCnpj = '09.015.844/0001-80';

  console.log(`\n--- Running CPF Validations ---`);
  const isCpfValid = validateCPF(validCpf);
  console.log(`Is CPF ${validCpf} valid? ${isCpfValid}`);
  if (!isCpfValid) {
    throw new Error(`CPF validation failed for a valid CPF: ${validCpf}`);
  }

  const isCpfInvalid = validateCPF(invalidCpf);
  console.log(`Is CPF ${invalidCpf} valid? ${isCpfInvalid}`);
  if (isCpfInvalid) {
    throw new Error(`CPF validation succeeded for an invalid CPF: ${invalidCpf}`);
  }
  console.log(`--- CPF Validations Passed ---\n`);

  console.log(`--- Running CNPJ Validations ---`);
  const isCnpjValid = validateCNPJ(validCnpj);
  console.log(`Is CNPJ ${validCnpj} valid? ${isCnpjValid}`);
  if (!isCnpjValid) {
    throw new Error(`CNPJ validation failed for a valid CNPJ: ${validCnpj}`);
  }
  console.log(`--- CNPJ Validations Passed ---\n`);

  console.log('✅ Example script ran successfully!');

} catch (error) {
  console.error('❌ An error occurred in the example script:');
  console.error(error);
  process.exit(1);
}
