<p align="center">
 <img width="300" src="https://res.cloudinary.com/zagatti/image/upload/v1597454271/validations-br/logo_w11ekb.png" alt="validations-br">
</p>


<h3 align="center">
  Easy validations ✅
</h3>

<br />

Read this in other languages: [Portuguese](https://github.com/reactivando/validations-br/blob/main/README.md)

<div align="center">

[![npm](https://img.shields.io/npm/v/validations-br.svg?color=%23007ec6&style=plastic)](https://www.npmjs.com/package/validations-br)<space><space>
[![Coverage Status](https://img.shields.io/coveralls/github/reactivando/validations-br?color=007ec6&style=plastic)](https://coveralls.io/github/reactivando/validations-br?branch=main)
[![License](https://img.shields.io/github/license/reactivando/validations-br?color=007ec6&style=plastic)](https://github.com/reactivando/validations-br/blob/main/LICENSE)

</div>

# Overview

Validations BR is a function tool belt for validating standard documents in Brazil and more.

# Installation

With npm:
```bash
npm install validations-br
``` 
With yarn:
```bash
yarn add validations-br
```

# Usage

## useValidationsBR

### Parâmetros

| Key   |                         Type                         |                  Description |
| :---- | :--------------------------------------------------: | ---------------------------: |
| type  | `cnpj \| cpf  \| cep \| email \| pis \| phone \| uf` | Type of data to be validated |
| value |                       `string`                       | Value that will be validated |

```js
import { useValidationsBR } from 'validations-br';
// const { useValidationsBR } = require('validations-br');

const cnpj = '09.015.844/0001-80';
const isValid = useValidationsBR('cnpj', cnpj);
```

## Validate CNPJ

```js
import { validateCNPJ } from 'validations-br';
// const { validateCNPJ } = require('validations-br');

const cnpj = '09.015.844/0001-80';
const isValid = validateCNPJ(cnpj);
```

## Validate CPF

```js
import { validateCPF } from 'validations-br';
// const { validateCPF } = require('validations-br');

const cpf = '370.785.180-04';
const isValid = validateCPF(cpf);
```

## Validate State Registration

```js
import { validateIE } from 'validations-br';
// const { validateIE } = require('validations-br');

const ie = '535.371.880.779';
const isValid = validateIE(ie, 'sp');
```

## Validate PIS

```js
import { validatePIS } from 'validations-br';
// const { validatePIS } = require('validations-br');

const pis = '833.28281.34-7';
const isValid = validatePIS(pis);
```

## Validate Phone

```js
import { validatePhone } from 'validations-br';
// const { validatePhone } = require('validations-br');

const phone = '(14) 99767-9472';
const isValid = validatePhone(phone);
```

## Validar CNH

```js
import { validateCNH } from 'validations-br';
// const { validateCNH } = require('validations-br');

const cnh = '134621966-24';
const isValid = validateCNH(cnh);
```

## Validate CEP

```js
import { validateCEP } from 'validations-br';
// const { validateCEP } = require('validations-br');

const cep = '17280-000';
const isValid = validateCEP(cep);
```

## Validate UF

```js
import { validateUF } from 'validations-br';
// const { validateUF } = require('validations-br');

const uf = 'SP';
const isValid = validateUF(uf);
```

## Bonus

## Validate E-mail

```js
import { validateEmail } from 'validations-br';
// const { validateEmail } = require('validations-br');

const email = 'johndoe@gmail.com';
const isValid = validateEmail(email);
```

# Integrations

## With Yup

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

## With Joi

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

# Contributing

Feel free to contribute to the project. We only ask that:

 - Fork it (https://github.com/reactivando/validations-br/fork)
 - Create your feature branch (git checkout -b feature/fooBar)
 - Write tests for the new feature or bug fix that you are solving
 - Commit your changes (git commit -am 'feat: add some fooBar')
 - Follow the commit conventions of [conventional-changelog](https://github.com/ajoslin/conventional-changelog) described in 
[conventional-conventions](https://github.com/ajoslin/conventional-changelog/blob/main/conventions/angular.md)
 - Push to the branch (git push origin feature/fooBar)
 - Ensure all tests pass before send the pull-request (Use: `$ yarn test` or `$ npm run test`)
 - Create a new Pull Request

# Authors

- André Zagatti [@azagatti](https://linkedin.com/in/andre-zagatti/)

- Ariel Franco [@arielff3](https://www.linkedin.com/in/ariel-franco-ferreira-37b42b17a/)

# License
MIT © [Reactivando](https://github.com/reactivando)
