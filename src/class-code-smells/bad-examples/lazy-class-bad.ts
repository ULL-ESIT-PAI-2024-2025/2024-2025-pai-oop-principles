/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates the **Over-Engineering Code Smell**:
 * - The `DiscountCalculator` class is unnecessary.
 * - It only performs a simple calculation that does not require object-oriented structure.
 * - Using a function instead is simpler and cleaner.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Overcomplicated class that applies a discount.
 */
export class DiscountCalculator {
  /**
   * Applies a discount of 10% to the price.
   * @param {number} price - The original price.
   * @returns {number} The discounted price.
   */
  public applyDiscount(price: number): number {
    return price * 0.9; // Overkill for a simple calculation
  }
}

// Example usage:
const calculator = new DiscountCalculator();
console.log(calculator.applyDiscount(100)); // Over-engineered, unnecessary class
