/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates flexibility for future changes through encapsulation.
 * The internal representation of temperature (`celsius`) is private,
 * but users can access the temperature in Fahrenheit via a public method (`getTemperatureInFahrenheit()`).
 * This allows future changes to the internal logic without affecting users.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */


/**
 * Represents a temperature with encapsulated Celsius value.
 */
class Temperature {
  private celsius: number;

  /**
   * Creates a new Temperature object.
   * @param {number} celsius - The initial temperature in Celsius.
   */
  public constructor(celsius: number) {
    this.celsius = celsius;
  }

  /**
   * Converts and returns the temperature in Fahrenheit.
   * @returns {number} The temperature in Fahrenheit.
   */
  public getTemperatureInFahrenheit(): number {
    return this.celsius * 9 / 5 + 32;
  }
}

// Example usage:
const temp = new Temperature(25);
console.log(temp.getTemperatureInFahrenheit()); // Outputs: 77°F
// console.log(temp.celsius); // Error: Property 'celsius' is private
