/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates a **Data Class** (Bad Practice):
 * - This class only **stores a username** with basic getters and setters.
 * - No real behavior or validation, making the class unnecessary.
 * - A simple type (`string`) would be better.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a username but **lacks meaningful behavior**.
 */
class Username {
  /**
   * Creates a new Username instance.
   * @param {string} username - The username.
   */
  constructor(private username: string) {}

  /**
   * Gets the username.
   * @returns {string} The username.
   */
  public getName(): string {
    return this.username;
  }

  /**
   * Sets a new username.
   * @param {string} newName - The new username.
   */
  public setName(newName: string) {
    this.username = newName;
  }
}

// Example usage:
const user = new Username('Alice');
console.log(user.getName()); // Just accessing a variable, no real behavior
user.setName('Bob'); // Unnecessary setter
console.log(user.getName());
