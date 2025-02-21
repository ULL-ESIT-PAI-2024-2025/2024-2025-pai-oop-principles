/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates **Polymorphism using Interfaces**:
 * - Defines a `Shape` interface with `area()`.
 * - `Circle` and `Rectangle` implement `Shape`, providing their own `area()` logic.
 * - Allows treating different shapes as `Shape` and calling `area()` polymorphically.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Interface representing a geometric shape.
 */
export interface Shape {
  /**
   * Computes the area of the shape.
   * @returns {number} The calculated area.
   */
  area(): number;
}

/**
 * Represents a circle.
 */
export class Circle implements Shape {
  /**
   * Creates a circle with a radius.
   * @param {number} radius - The radius of the circle.
   */
  constructor(private radius: number) {}

  /**
   * Computes the area of the circle.
   * @returns {number} The calculated area.
   */
  public area(): number {
    return Math.PI * this.radius ** 2;
  }
}

/**
 * Represents a rectangle.
 */
export class Rectangle implements Shape {
  /**
   * Creates a rectangle with width and height.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(private width: number, private height: number) {}

  /**
   * Computes the area of the rectangle.
   * @returns {number} The calculated area.
   */
  public area(): number {
    return this.width * this.height;
  }
}

// Example usage:
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach((shape) => {
  console.log(shape.area()); // Different implementations run dynamically
});
