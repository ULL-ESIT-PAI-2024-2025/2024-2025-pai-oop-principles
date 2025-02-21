/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Fixing the **Over-Engineering Code Smell**:
 * - Replaces the unnecessary static class with an `enum`.
 * - Improves readability and type safety.
 * - Makes the code cleaner and more idiomatic.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents HTTP status codes using an `enum`.
 */
export enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

// Example usage:
console.log(HttpStatus.OK); // Cleaner and type-safe
console.log(HttpStatus.NOT_FOUND);