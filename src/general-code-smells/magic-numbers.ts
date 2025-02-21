/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example of a non descriptive 
 * non constant magic number and a descriptive constant magic number
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

let magicNumber: number = 7;              // Bad example, could mean days in a week
const HOURS_IN_DAY: number = 24;          // Good example
console.log(magicNumber + HOURS_IN_DAY);  // Prints 31