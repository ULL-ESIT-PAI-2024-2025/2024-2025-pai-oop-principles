/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Fixing the **Data Class Code Smell**:
 * - Now, `Username` has **real behavior**.
 * - The class **justifies its existence** by providing logic.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a username with validation and formatting utilities.
 */
export class Username {
  private username: string;

  /**
   * Creates a new Username instance.
   * @param {string} username - The username.
   * @throws {Error} If the username is too short.
   */
  constructor(username: string) {
    this.setUsername(username);
  }

  /**
   * Gets the username in uppercase format.
   * @returns {string} The formatted username.
   */
  public getName(): string {
    return this.username;
  }

  /**
   * Sets a new username after validation.
   * @param {string} newName - The new username.
   * @throws {Error} If the username is too short.
   */
  public setUsername(newName: string): void {
    if (newName.length < 3) {
      throw new Error("Username must be at least 3 characters long.");
    }
    this.username = newName;
  }

  /**
   * Checks if the username contains at least one number.
   * @returns {boolean} True if the username contains a number, false otherwise.
   */
  public hasNumbers(): boolean {
    return /\d/.test(this.username);
  }
}

// Example usage:
const user = new Username("Alice");
console.log(user.getName()); // ✅ "ALICE"
user.setUsername("Bob123"); // ✅ Sets new username
console.log(user.hasNumbers()); // ✅ true (contains "123")
console.log(user.getName()); // ✅ "BOB123"