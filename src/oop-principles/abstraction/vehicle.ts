/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates **Abstraction using an Abstract Class**:
 * - Defines `Vehicle` as an abstract class with an abstract method (`start()`).
 * - `drive()` is implemented in `Vehicle` but calls `start()`, enforcing its behavior in subclasses.
 * - `Car` provides its own implementation of `start()`, demonstrating **abstraction**.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Abstract class representing a vehicle.
 */
export abstract class Vehicle {
  /**
   * Starts the vehicle.  
   * Must be implemented by subclasses.
   */
  abstract start(): void;

  /**
   * Drives the vehicle by starting it first.
   * Calls `start()` before printing movement.
   */
  public drive(): void {
    this.start();
    console.log('Vehicle is moving.');
  }
}

/**
 * Represents a car, which is a type of vehicle.
 */
export class Car extends Vehicle {
  /**
   * Starts the car engine.
   */
  public start(): void {
    console.log('Car engine started.');
  }
}

// Example usage:
const myCar = new Car();
myCar.drive(); // 'Car engine started.' → 'Vehicle is moving.'
