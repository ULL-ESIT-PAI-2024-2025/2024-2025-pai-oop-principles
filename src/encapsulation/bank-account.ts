/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates composition with a "has-a" relationship:
 * A `Person` has an `Address`.
 * 
 * - The `BankAccount` class encapsulates the `balance` field, preventing unauthorized modifications.
 * - Access to the balance is controlled through public methods (`deposit()` and `getBalance()`).
 * - Ensures data integrity by validating deposits and prohibiting direct balance modifications.
 * - Promotes modularity and security by following best practices in object-oriented design.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */


/**
 * Represents a bank account with encapsulated balance managment.
 * Provides methods for deposits, withdrawls, and balance inquiries.
 */
class BankAccount {
  private balance: number;

  /**
   * Creates a new BankAccount with an initial balance.
   * @param initialBalance - The starting balance for the account.
   */
  public constructor(initialBalance: number = 0) {
    if (initialBalance < 0) {
      throw new Error('Initial balance cannot be negative');
    }
    this.balance = initialBalance;
  }
  
  /**
   * Deposits money into the account.
   * @param {number} amount - The amount to deposit.
   */
  public deposit(amount: number): void {
    if (amount <= 0) throw new Error('Deposit must be positive');
    this.balance += amount;
  }

  /**
   * Retrieves the current account balance.
   * @returns {number} The current balance.
   */
  public getBalance(): number {
    return this.balance;
  }
}

// Example usage:
const account = new BankAccount(500);
account.deposit(100);
// account.balance = 9999; // Not allowed
console.log(account.getBalance()); // Outputs: 600
