import { useValidationsBR } from '../index';

describe('UseValidationBr Cep', () => {
  it('should be able return true to valid CEP', () => {
    expect(useValidationsBR('cep', '45980-000')).toBe(true);
  });

  it('should be able return false to invalid CEP', () => {
    expect(useValidationsBR('cep', '172800-0000')).toBe(false);
  });
});

describe('UseValidationBr CNPJ', () => {
  it('should be able return true to valid CNPJ', () => {
    expect(useValidationsBR('cnpj', '66.919.381/0001-15')).toBe(true);
  });

  it('should be able return false to invalid CNPJ', () => {
    expect.assertions(2);

    expect(useValidationsBR('cnpj', '12.732.455/0001-25')).toBe(false);
    expect(useValidationsBR('cnpj', '66.919.381/0001-10')).toBe(false);
  });

  it('should be able return false to pass a empty string', () => {
    expect(useValidationsBR('cnpj', '')).toBe(false);
  });

  it('should be able return false to pass a string over 14 characters', () => {
    expect(useValidationsBR('cnpj', '66.919.381/00001-14')).toBe(false);
  });

  it('should be able return false to pass a only repeated numbers', () => {
    expect(useValidationsBR('cnpj', '11.111.111/1111-11')).toBe(false);
  });
});

describe('UseValidationBr CPF', () => {
  it('should be able return true to valid CNPJ', () => {
    expect.assertions(3);

    expect(useValidationsBR('cpf', '248.283.728-65')).toBe(true);
    expect(useValidationsBR('cpf', '241.845.620-00')).toBe(true);
    expect(useValidationsBR('cpf', '551.137.567-50')).toBe(true);
  });

  it('should be able return false to invalid CNPJ', () => {
    expect.assertions(2);

    expect(useValidationsBR('cpf', '248.283.728-66')).toBe(false);
    expect(useValidationsBR('cpf', '425.719.798-04')).toBe(false);
  });

  it('should be able return false to pass a empty string', () => {
    expect(useValidationsBR('cpf', '')).toBe(false);
  });

  it('should be able return false to pass a only repeated numbers', () => {
    expect(useValidationsBR('cpf', '000.000.000-00')).toBe(false);
  });
});

describe('UseValidationBr Email', () => {
  it('should be able return true to valid Email', () => {
    expect(useValidationsBR('email', 'johndoe@email.com')).toBe(true);
  });

  it('should be able return false to invalid Email', () => {
    expect(useValidationsBR('email', 'johndoe.email.com')).toBe(false);
  });
});

describe('UseValidationBr Phone', () => {
  it('should be able return true to valid Phone', () => {
    expect(useValidationsBR('phone', '+(14) 99676-9472')).toBe(true);
  });

  it('should be able return false to invalid Phone', () => {
    expect(useValidationsBR('phone', '+(14) 99676-94722')).toBe(false);
  });

  it('should be able return false to pass over 11 length', () => {
    expect(useValidationsBR('phone', '+(14) 99676-947222')).toBe(false);
  });

  it('should be able return false to pass only 9', () => {
    expect(useValidationsBR('phone', '+(99) 99999-9999')).toBe(false);
  });

  it('should be able return false to pass a wrong DDD', () => {
    expect(useValidationsBR('phone', '+(00) 99676-9472')).toBe(false);
  });

  it('should be able return false to pass a wrong initial fixed phone', () => {
    expect(useValidationsBR('phone', '+(14) 9676-9472')).toBe(false);
  });

  it('should be able return false to pass a cell phone without 9 initial digit', () => {
    expect(useValidationsBR('phone', '+(14) 89676-9472')).toBe(false);
  });
});

describe('UseValidationBr Pis', () => {
  it('should be able return true to valid PIS', () => {
    expect(useValidationsBR('pis', '219.88440.79-5')).toBe(true);
  });

  it('should be able return false to invalid PIS', () => {
    expect.assertions(2);

    expect(useValidationsBR('pis', '220.88440.79-5')).toBe(false);
    expect(useValidationsBR('pis', '999.99999.99-9')).toBe(false);
  });
});

describe('UseValidationBr Pis', () => {
  it('should be able return true to valid UF', () => {
    expect(useValidationsBR('uf', 'SP')).toBe(true);
  });

  it('should be able return false to invalid UF', () => {
    expect(useValidationsBR('uf', 'AA')).toBe(false);
  });
});
