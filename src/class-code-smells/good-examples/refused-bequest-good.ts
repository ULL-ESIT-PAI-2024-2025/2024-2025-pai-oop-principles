/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Fixing the **Refused Bequest Code Smell**:
 * - Uses an `interface` instead of forcing inheritance.
 * - Correctly models `Vehicle` behavior without unnecessary methods.
 * - Follows Liskov Substitution Principle (LSP)—all classes correctly implement `Vehicle`.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Defines a contract for all vehicles.
 */
export interface Vehicle {
  /**
   * Moves the vehicle in a way appropriate to its type.
   * @returns {string} A message indicating movement.
   */
  move(): string;
}

/**
 * Represents a car, which moves by starting its engine.
 */
export class Car implements Vehicle {
  /**
   * Starts the car engine.
   * @returns {string} A message confirming the engine started.
   */
  public move(): string {
    return "Engine started!";
  }
}

/**
 * Represents a bicycle, which moves by pedaling.
 */
export class Bicycle implements Vehicle {
  /**
   * Simulates pedaling a bicycle.
   * @returns {string} A message confirming pedaling.
   */
  public move(): string {
    return "Pedaling!";
  }
}

// Example usage:
const car = new Car();
console.log(car.move()); // "Engine started!"

const bike = new Bicycle();
console.log(bike.move()); // "Pedaling!"
