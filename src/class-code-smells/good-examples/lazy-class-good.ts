/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Fixing the **Over-Engineering Code Smell**:
 * - Replaces the unnecessary class with a simple function.
 * - Improves readability and maintainability.
 * - Follows the YAGNI principle—only implement what’s truly needed.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Applies a discount of 10% to the price.
 * @param {number} price - The original price.
 * @returns {number} The discounted price.
 */
export function applyDiscount(price: number): number {
  return price * 0.9;
}

// Example usage:
console.log(applyDiscount(100)); // 90
