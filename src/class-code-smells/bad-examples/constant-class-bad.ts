/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates the **Over-Engineering Code Smell**:
 * - `HttpStatus` is a static class with only constants.
 * - A class is unnecessary when an `enum` would be more appropriate.
 * - Makes code more verbose and less type-safe.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents HTTP status codes using a static class.
 * This is unnecessary—an `enum` is a better choice.
 */
export class HttpStatus {
  public static readonly OK = 200;
  public static readonly BAD_REQUEST = 400;
  public static readonly UNAUTHORIZED = 401;
  public static readonly NOT_FOUND = 404;
}

// Example usage:
console.log(HttpStatus.OK); // Overkill
console.log(HttpStatus.NOT_FOUND);
