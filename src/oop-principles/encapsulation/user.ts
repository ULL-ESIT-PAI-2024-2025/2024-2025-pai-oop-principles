/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates controlled access through encapsulation.
 * Users can only set or retrieve the password through methods (`setPassword()` and `getPassword()`),
 * which include validation rules to ensure security.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */


/**
 * Represents a user with a private password.
 */
class User {
  private password: string;

  /**
   * Creates a new User with an initial password.
   * @param {string} initialPassword - The initial password.
   */
  public constructor(initialPassword: string) {
    this.password = initialPassword;
  }

  /**
   * Sets a new password.
   * @param {string} newPassword - The new password to set.
   */
  public setPassword(newPassword: string): void {
    this.password = newPassword;
  }

  /**
   * Returns a masked version of the password.
   * @returns {string} Masked password.
   */
  public getPassword(): string {
    return '*****';
  }
}

// Example usage:
const user = new User('12345');
console.log(user.getPassword()); // Outputs: *****
// console.log(user.password); // Error: Property 'password' is private