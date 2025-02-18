/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates Delegation for Behavior Swapping (Strategy Pattern):
 * A `PaymentProcessor` delegates payments to different payment methods.
 *
 * @author idk
 * @since 18/02/2025
 */

/**
 * Interface for payment strategies.
 * Represents a generic payment method.
 */
interface PaymentMethod {
  /**
   * Processes a payment.
   * @param {number} amount - The amount to pay.
   * @returns {string} A confirmation message.
   */
  pay(amount: number): string;
}

/**
 * Concrete strategy for credit card payment.
 */
class CreditCardPayment implements PaymentMethod {
  /**
   * Creates a `CreditCardPayment` instance.
   */
  public constructor() {}

  /**
   * Processes a payment using a credit card.
   * @param {number} amount - The amount to pay.
   * @returns {string} A confirmation message.
   */
  public pay(amount: number): string {
    return `Paid $${amount} with Credit Card`;
  }
}

/**
 * Concrete strategy for PayPal payment.
 */
class PayPalPayment implements PaymentMethod {
  /**
   * Creates a `PayPalPayment` instance.
   */
  public constructor() {}

  /**
   * Processes a payment using PayPal.
   * @param {number} amount - The amount to pay.
   * @returns {string} A confirmation message.
   */
  public pay(amount: number): string {
    return `Paid $${amount} with PayPal`;
  }
}

/**
 * Payment processor that delegates to a payment method.
 */
class PaymentProcessor {
  private method: PaymentMethod;

  /**
   * Creates a PaymentProcessor with a payment method.
   * This demonstrates the Strategy Pattern through delegation.
   * @param {PaymentMethod} method - The payment method to use.
   */
  public constructor(method: PaymentMethod) {
    this.method = method;
  }

  /**
   * Processes a payment using the selected payment method.
   * Delegates the task to the assigned payment method.
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
console.log(processor1.processPayment(100)); // Outputs: Paid $100 with Credit Card

// Switch to PayPal at runtime and process another payment
processor1.setPaymentMethod(paypalPayment);
console.log(processor1.processPayment(200)); // Outputs: Paid $200 with PayPal
