/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates Delegation to Avoid Complex Inheritance:
 * A `RemoteControl` delegates operations to a `Television`.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a television with basic operations.
 */
class Television {
  /**
   * Turns on the television.
   * @returns {string} A confirmation message.
   */
  public turnOn(): string {
    return 'Television is now ON';
  }

  /**
   * Changes the television channel.
   * @param {number} channel - The channel number to switch to.
   * @returns {string} A message confirming the channel change.
   */
  public changeChannel(channel: number): string {
    return `Channel changed to ${channel}`;
  }
}

/**
 * Represents a remote control that delegates commands to a television.
 */
class RemoteControl {
  private tv: Television;

  /**
   * Creates a RemoteControl for a Television.
   * @param {Television} tv - The television to control.
   */
  public constructor(tv: Television) {
    this.tv = tv;
  }

  /**
   * Turns on the television via delegation.
   * @returns {string} The result from the television.
   */
  public turnOn(): string {
    return this.tv.turnOn();
  }

  /**
   * Changes the television channel via delegation.
   * @param {number} channel - The channel number to switch to.
   * @returns {string} The result from the television.
   */
  public changeChannel(channel: number): string {
    return this.tv.changeChannel(channel);
  }
}

// Example usage:
const tv = new Television();
const remote = new RemoteControl(tv);

console.log(remote.turnOn());           // Outputs: Television is now ON
console.log(remote.changeChannel(5));   // Outputs: Channel changed to 5
