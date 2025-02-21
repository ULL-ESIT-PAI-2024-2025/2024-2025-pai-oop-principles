/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example of an initialized and undefined variable
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

let undefinedNumber;                            // Bad example
let definedNumber: number = 10;                 // Good example
console.log(undefinedNumber + definedNumber);   // Prints NaN because
                                                // undefined + number = NaN
