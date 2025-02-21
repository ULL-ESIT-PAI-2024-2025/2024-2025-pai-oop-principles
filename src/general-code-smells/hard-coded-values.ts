/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example of a hard-coded non constant and a constant
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

let hardCodedString: string = 'Hello';                // Bad example
const CONST_STRING: string = 'World!';                // Good example
console.log(hardCodedString + ', ' + CONST_STRING);   // Prints Hello, World!