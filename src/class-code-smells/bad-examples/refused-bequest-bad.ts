/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates the **Refused Bequest Code Smell**:
 * - `Bicycle` inherits from `Vehicle` but does not use `startEngine()`.
 * - Violates Liskov Substitution Principle (LSP)—not all vehicles have an engine.
 * - Forces unnecessary overrides or ignored methods.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a generic vehicle with an engine.
 */
export class Vehicle {
  /**
   * Starts the engine of the vehicle.
   * @returns {string} A message confirming the engine started.
   */
  public startEngine(): string {
    return "Engine started!";
  }
}

/**
 * Represents a bicycle, but it incorrectly inherits from `Vehicle`.
 * Bicycles do not have engines, making `startEngine()` unnecessary.
 */
export class Bicycle extends Vehicle {
  /**
   * Simulates pedaling a bicycle.
   * @returns {string} A message confirming pedaling.
   */
  public pedal(): string {
    return "Pedaling!";
  }
}

// Example usage:
const bike = new Bicycle();
console.log(bike.startEngine()); // Bicycles don’t have engines!
console.log(bike.pedal()); // "Pedaling!"
