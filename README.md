<p align="center">
 <img width="300" src="https://res.cloudinary.com/zagatti/image/upload/v1597454271/validations-br/logo_w11ekb.png" alt="validations-br">
</p>


<h3 align="center">
  Validações de forma fácil ✅
</h3>

<br />

Leia isso em outras línguas: [English](https://github.com/reactivando/validations-br/blob/main/README.en.md)

<div align="center">

[![npm](https://img.shields.io/npm/v/validations-br.svg?color=%23007ec6&style=plastic)](https://www.npmjs.com/package/validations-br)<space><space>
[![Coverage Status](https://img.shields.io/coveralls/github/reactivando/validations-br?color=007ec6&style=plastic)](https://coveralls.io/github/reactivando/validations-br?branch=main)
[![License](https://img.shields.io/github/license/reactivando/validations-br?color=007ec6&style=plastic)](https://github.com/reactivando/validations-br/blob/main/LICENSE)

</div>

# Visão geral

Validations BR é um cinto de ferramentas de funções para validar documentos padrões no Brasil e mais.

# Instalação

Com npm:
```bash
npm install validations-br
``` 
Com yarn:
```bash
yarn add validations-br
```

# Como usar

## useValidationsBR

### Parâmetros

| Chave |                         Tipo                         |                         Descrição |
| :---- | :--------------------------------------------------: | --------------------------------: |
| type  | `cnpj \| cpf  \| cep \| email \| pis \| phone \| uf` | Tipo de dados que serão validados |
| value |                       `string`                       |           Valor que será validado |

```js
import { useValidationsBR } from 'validations-br';
// const { useValidationsBR } = require('validations-br');

const cnpj = '09.015.844/0001-80';
const isValid = useValidationsBR('cnpj', cnpj);
```

## Validar CNPJ

```js
import { validateCNPJ } from 'validations-br';
// const { validateCNPJ } = require('validations-br');


const cnpj = '09.015.844/0001-80';
const isValid = validateCNPJ(cnpj);
```

## Validar CPF

```js
import { validateCPF } from 'validations-br';
// const { validateCPF } = require('validations-br');

const cpf = '370.785.180-04';
const isValid = validateCPF(cpf);
```

## Validar Inscrição Estadual

```js
import { validateIE } from 'validations-br';
// const { validateIE } = require('validations-br');

const ie = '535.371.880.779';
const isValid = validateIE(ie, 'sp');
```

## Validar PIS/PASEP

```js
import { validatePIS } from 'validations-br';
// const { validatePIS } = require('validations-br');

const pis = '833.28281.34-7';
const isValid = validatePIS(pis);
```

## Validar CNH

```js
import { validateCNH } from 'validations-br';
// const { validateCNH } = require('validations-br');

const cnh = '134621966-24';
const isValid = validateCNH(cnh);
```

## Validar Telefone

```js
import { validatePhone } from 'validations-br';
// const { validatePhone } = require('validations-br');

const phone = '(14) 99767-9472';
const isValid = validatePhone(phone);
```

## Validar CEP

```js
import { validateCEP } from 'validations-br';
// const { validateCEP } = require('validations-br');

const cep = '17280-000';
const isValid = validateCEP(cep);
```

## Validar UF

```js
import { validateUF } from 'validations-br';
// const { validateUF } = require('validations-br');

const uf = 'SP';
const isValid = validateUF(uf);
```

## Bônus

## Validar E-mail

```js
import { validateEmail } from 'validations-br';
// const { validateEmail } = require('validations-br');

const email = 'johndoe@gmail.com';
const isValid = validateEmail(email);
```

# Integrações

## Com Yup

```js
import { validateCNPJ } from "validations-br";
import * as Yup from "yup";

try {
  const schema = Yup.string().test(
    "is-cnpj",
    "CNPJ is not valid",
    (value) => validateCNPJ(value)
  );
  
  await schema.validate(cnpj);
} catch(err) {
  console.log(err.message);
}
```

## Com Joi

```js
import { validateCNPJ } from "validations-br";
import Joi from "joi";

try {
  const schema = Joi.string().custom(validateCNPJ, "Validate CNPJ");

  const { value } = schema.validate(cnpj);

  if (!value) {
    throw Error("CNPJ is not valid");
  }
} catch(err) {
  console.log(err.message);
}
```

# Como contribuir

Fique a vontade para contribuir com o projeto. Nós só pedimos para que:

 - Dê fork (https://github.com/reactivando/validations-br/fork)
 - Crie sua branch da feature/fix (git checkout -b feature/fooBar)
 - Escreva os testes para a nova feature ou do bug fix resolvido
 - Faça o commit das mudanças (git commit -am 'feat: add some fooBar')
 - Siga os padrões de commit [conventional-changelog](https://github.com/ajoslin/conventional-changelog) descritos em 
[conventional-conventions](https://github.com/ajoslin/conventional-changelog/blob/main/conventions/angular.md)
 - Dê push dá branch para seu repositório (git push origin feature/fooBar)
 - Tenha certeza que os testes passaram antes de abrir a pull-request (Use: `$ yarn test` or `$ npm run test`)
 - Crie uma nova Pull Request

# Autores

- André Zagatti [@azagatti](https://linkedin.com/in/andre-zagatti/)

- Ariel Franco [@arielff3](https://www.linkedin.com/in/ariel-franco-ferreira-37b42b17a/)

# Licença
MIT © [Reactivando](https://github.com/reactivando)
