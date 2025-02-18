/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates data protection through encapsulation.
 * Prevents unauthorized access to sensitive data (`balance`) by using private fields 
 * and controlling modifications via public methods (`deposit()` and `getBalance()`).
 *
 * @author idk
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
// account.balance = 9999; // ❌ Not allowed
console.log(account.getBalance()); // ✅ Outputs: 600