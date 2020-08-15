<p align="center">
 <img width="300" src="https://res.cloudinary.com/zagatti/image/upload/v1597454271/validations-br/logo_w11ekb.png" alt="validations-br">
</p>


<h3 align="center">
  Easy validations ✅
</h3>

<br />

<div align="center">

[![npm](https://img.shields.io/npm/v/validations-br.svg?color=%23007ec6&style=plastic)](https://www.npmjs.com/package/validations-br)<space><space>
[![Coverage Status](https://img.shields.io/coveralls/github/reactivando/validations-br?color=007ec6&style=plastic)](https://coveralls.io/github/reactivando/validations-br?branch=master)
[![License](https://img.shields.io/github/license/reactivando/validations-br?color=007ec6&style=plastic)](https://github.com/reactivando/validations-br/blob/master/LICENSE)

</div>

# Overview

Validations BR is a function tool belt for validating standard documents in Brazil.

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

## Validate CNPJ

```js
const { validateCNPJ } = require('validations-br');

const cnpj = '09.015.844/0001-80';
const isValid = validateCNPJ(cnpj);
```

## Validate CPF

```js
const { validateCPF } = require('validations-br');

const cpf = '370.785.180-04';
const isValid = validateCPF(cpf);
```

## Validate State Registration

```js
const { validateIE } = require('validations-br');

const ie = '535.371.880.779';
const isValid = validateIE(ie, 'sp');
```

## Validate PIS

```js
const { validatePIS } = require('validations-br');

const pis = '833.28281.34-7';
const isValid = validatePIS(pis);
```

## Validate Phone

```js
const { validatePhone } = require('validations-br');

const phone = '(14) 99767-9472';
const isValid = validatePhone(phone);
```

## Validate E-mail

```js
const { validateEmail } = require('validations-br');

const email = 'johndoe@gmail.com';
const isValid = validateEmail(email);
```

## Validate CEP

```js
const { validateCEP } = require('validations-br');

const cep = '17280-000';
const isValid = validateCEP(cep);
```

## Validate UF

```js
const { validateUF } = require('validations-br');

const uf = 'SP';
const isValid = validateUF(uf);
```

# Author

- André Zagatti [@azagatti](https://linkedin.com/in/andre-zagatti/)

# License
MIT © [Reactivando](https://github.com/reactivando)