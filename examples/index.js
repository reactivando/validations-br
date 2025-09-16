const { validateCPF, validateCNPJ } = require('validations-br');

const cpf = '370.785.180-04';
const cnpj = '09.015.844/0001-80';

console.log(`Is CPF ${cpf} valid?`, validateCPF(cpf));
console.log(`Is CNPJ ${cnpj} valid?`, validateCNPJ(cnpj));

const invalidCpf = '111.111.111-11';
console.log(`Is CPF ${invalidCpf} valid?`, validateCPF(invalidCpf));

if (!validateCPF(cpf)) {
    throw new Error('CPF validation failed for a valid CPF!');
}

if (validateCPF(invalidCpf)) {
    throw new Error('CPF validation failed for an invalid CPF!');
}

console.log('Example script ran successfully!');
