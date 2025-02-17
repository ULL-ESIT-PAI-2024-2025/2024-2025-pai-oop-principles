

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
    return '*****'; // Masked value
  }
}

// Example usage:
const user = new User('initialPass123');
console.log(user.getPassword()); // Outputs: *****
// console.log(user.password); // Error: Property 'password' is private


