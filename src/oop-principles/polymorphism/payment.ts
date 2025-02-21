/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates **Polymorphism using Abstract Classes**:
 * - Defines an abstract class `PaymentMethod` with `pay()`.
 * - `CreditCardPayment` and `PayPalPayment` override `pay()` with different logic.
 * - Allows treating all payment methods as `PaymentMethod`, enabling flexibility.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Abstract class representing a payment method.
 */
export abstract class PaymentMethod {
  /**
   * Processes a payment.
   * Must be implemented by subclasses.
   * @param {number} amount - The amount to pay.
   * @returns {string} A confirmation message.
   */
  public abstract pay(amount: number): string;
}

/**
 * Represents a credit card payment.
 */
export class CreditCardPayment extends PaymentMethod {
  /**
   * Processes a credit card payment.
   * @param {number} amount - The amount to pay.
   * @returns {string} A confirmation message.
   */
  public pay(amount: number): string {
    return `Paid $${amount} with Credit Card.`;
  }
}

/**
 * Represents a PayPal payment.
 */
export class PayPalPayment extends PaymentMethod {
  /**
   * Processes a PayPal payment.
   * @param {number} amount - The amount to pay.
   * @returns {string} A confirmation message.
   */
  public pay(amount: number): string {
    return `Paid $${amount} with PayPal.`;
  }
}

/**
 * Payment processor that delegates payment processing.
 */
export class PaymentProcessor {
  private method: PaymentMethod;

  /**
   * Creates a PaymentProcessor with a payment method.
   * @param {PaymentMethod} method - The payment method to use.
   */
  constructor(method: PaymentMethod) {
    this.method = method;
  }

  /**
   * Processes a payment using the selected payment method.
   * @param {number} amount - The amount to pay.
   * @returns {string} The payment result.
   */
  public processPayment(amount: number): string {
    return this.method.pay(amount);
  }

  /**
   * Changes the payment method at runtime.
   * @param {PaymentMethod} newMethod - The new payment method to use.
   */
  public setPaymentMethod(newMethod: PaymentMethod): void {
    this.method = newMethod;
  }
}

// Example usage:
const creditPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();

// Create a processor with Credit Card and process a payment
const processor1 = new PaymentProcessor(creditPayment);
console.log(processor1.processPayment(100)); // "Paid $100 with Credit Card."

// Switch to PayPal at runtime and process another payment
processor1.setPaymentMethod(paypalPayment);
console.log(processor1.processPayment(200)); // "Paid $200 with PayPal."
