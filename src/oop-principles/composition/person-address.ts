/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates composition with a 'has-a' relationship:
 * A `Person` has an `Address`.
 * 
 * - `Person` uses an `Address` object through composition.
 * - `Address` is a separate, reusable class, showing modularity.
 * - Changes to `Address` do not affect `Person`, maintaining encapsulation.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents an address with a street and city.
 */
class Address {
  private street: string;
  private city: string;

  /**
   * Creates an address.
   * @param {string} street - The street name.
   * @param {string} city - The city name.
   */
  public constructor(street: string, city: string) {
    this.street = street;
    this.city = city;
  }

  /**
   * Gets the full address.
   * @returns {string} The full address as a string.
   */
  public getFullAddress(): string {
    return `${this.street}, ${this.city}`;
  }
}

/**
 * Represents a person with a name and address.
 */
class Person {
  private name: string;
  private address: Address;

  /**
   * Creates a person with an address.
   * @param {string} name - The person's name.
   * @param {Address} address - The person's address.
   */
  public constructor(name: string, address: Address) {
    this.name = name;
    this.address = address;
  }

  /**
   * Gets the person's details.
   * @returns {string} The person's name and address.
   */
  public getDetails(): string {
    return `${this.name} lives at ${this.address.getFullAddress()}`;
  }
}

// Example usage:
const myAddress = new Address('123 Main St', 'New York');
const person = new Person('Alice', myAddress);
console.log(person.getDetails()); // Outputs: Alice lives at 123 Main St, New York
