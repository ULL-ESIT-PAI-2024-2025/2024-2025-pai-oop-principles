/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates composition with multiple components:
 * A `Computer` has a `Mouse` and a `Keyboard`.
 * 
 * - `Computer` uses `Mouse` and `Keyboard` objects through composition.
 * - `Mouse` and `Keyboard` are independent, reusable classes, showing modularity.
 * - Changing components is easy (e.g., using a different `Mouse`). 
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @brief Interface to represent a single instruction
 * @since 18/02/2025
 */

/**
 * Represents a mouse.
 */
class Mouse {
  /**
   * Clicks the mouse.
   * @returns {string} A mouse click action.
   */
  public click(): string {
    return 'Mouse clicked';
  }
}

/**
 * Represents a keyboard.
 */
class Keyboard {
  /**
   * Types on the keyboard.
   * @returns {string} A typing action.
   */
  public type(): string {
    return 'Keyboard typing';
  }
}

/**
 * Represents a computer with a mouse and keyboard.
 */
class Computer {
  private mouse: Mouse;
  private keyboard: Keyboard;

  /**
   * Creates a computer with a mouse and keyboard.
   * @param {Mouse} mouse - The computer's mouse.
   * @param {Keyboard} keyboard - The computer's keyboard.
   */
  public constructor(mouse: Mouse, keyboard: Keyboard) {
    this.mouse = mouse;
    this.keyboard = keyboard;
  }

  /**
   * Uses the computer's mouse and keyboard.
   * @returns {string} The actions performed.
   */
  public useComputer(): string {
    return `${this.mouse.click()} and ${this.keyboard.type()}`;
  }
}

// Example usage:
const mouse = new Mouse();
const keyboard = new Keyboard();
const computer = new Computer(mouse, keyboard);
console.log(computer.useComputer()); // Outputs: Mouse clicked and Keyboard typing
