/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example some that returns too much data
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

const USER: {id: number, name: string, email: string} = {
  id: 10,
  name: 'Salvador González Cueto',
  email: 'alu0101424750@ull.edu.es'
}

/**
 * A function that returns too much data
 * @returns A string with 'id name email'
 */
function getUser(): string {
  return USER.id + ' ' + USER.name + ' ' + USER.email;
}

/**
 * A function that returns a USER id
 * @returns The id of the user USER
 */
function getUserId(): number {
  return USER.id;
}

/**
 * A function that returns a USER name
 * @returns The name of the user USER
 */
function getUserName(): string {
  return USER.name;
}

/**
 * A function that returns a USER email
 * @returns The email of the user USER
 */
function getUserEmail(): string {
  return USER.email;
}