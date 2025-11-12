const { suma, resta, multiplicacion } = require('./index');

describe('Pruebas de operaciones matemáticas', () => {
  test('suma de 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
  });

  test('suma de 0 + 0 debe ser 0', () => {
    expect(suma(0, 0)).toBe(0);
  });

  test('resta de 5 - 3 debe ser 2', () => {
    expect(resta(5, 3)).toBe(2);
  });

  test('resta de 10 - 10 debe ser 0', () => {
    expect(resta(10, 10)).toBe(0);
  });

  test('multiplicación de 3 * 4 debe ser 12', () => {
    expect(multiplicacion(3, 4)).toBe(12);
  });

  test('multiplicación de 5 * 0 debe ser 0', () => {
    expect(multiplicacion(5, 0)).toBe(0);
  });
});
