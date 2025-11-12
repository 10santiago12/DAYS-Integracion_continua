// Funciones de ejemplo para demostrar CI/CD

/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a y b
 */
function suma(a, b) {
  return a + b;
}

/**
 * Resta dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La resta de a - b
 */
function resta(a, b) {
  return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} El producto de a y b
 */
function multiplicacion(a, b) {
  return a * b;
}

module.exports = { suma, resta, multiplicacion };
