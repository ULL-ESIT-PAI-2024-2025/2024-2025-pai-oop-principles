/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example of lack of handling of exceptions
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Bad example of a function that doesn't handle exceptions
 * @param dividend The dividend
 * @param divisor The divisor
 * @returns The division between dividend / divisor
 */
function unsafeDivision(dividend: number, divisor: number): number {
  return dividend / divisor;
}

/**
 * Good example of a division that handles exceptions
 * @param dividend The dividend
 * @param divisor The divisor
 * @returns The division between dividend / divisor
 */
function safeDivision(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error('Can\'t divide by 0');
  }
  return dividend / divisor;
}

console.log(unsafeDivision(10, 0));
console.log(safeDivision(10, 0));