/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates **Method Overriding in Inheritance**:
 * - `Vehicle` is the superclass that defines `move()`.
 * - `Car` is a subclass that **overrides** `move()` with more specific behavior.
 * - Demonstrates how method overriding allows for customized implementations in subclasses.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a generic vehicle.
 */
export class Vehicle {
  /**
   * Moves the vehicle.
   * @returns {string} A message describing movement.
   */
  public move(): string {
    return 'The vehicle is moving.';
  }
}

/**
 * Represents a car, which is a type of vehicle.
 */
export class Car extends Vehicle {
  /**
   * Moves the car in a specific way.
   * @returns {string} A message describing car movement.
   */
  public move(): string {
    return 'The car is driving on the road.';
  }
}

// Example usage:
const vehicle = new Vehicle();
console.log(vehicle.move()); // 'The vehicle is moving.'

const car = new Car();
console.log(car.move()); // 'The car is driving on the road.'
