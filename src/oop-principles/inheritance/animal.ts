/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates **Inheritance**:
 * - `Animal` is the superclass with shared behavior (`eat()`).
 * - `Dog` is a subclass that overrides `makeSound()` but keeps `eat()`.
 * - Demonstrates method overriding and inheritance.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a generic animal.
 */
export class Animal {
  /**
   * Makes a generic animal sound.
   * @returns {string} A sound description.
   */
  public makeSound(): string {
    return "Some generic animal sound.";
  }

  /**
   * Simulates an animal eating.
   * @returns {string} A message indicating the animal is eating.
   */
  public eat(): string {
    return "The animal is eating.";
  }
}

/**
 * Represents a dog, which is a type of animal.
 */
export class Dog extends Animal {
  /**
   * Makes a dog-specific sound.
   * @returns {string} A message indicating the dog's bark.
   */
  public makeSound(): string {
    return "Woof! Woof!";
  }
}

// Example usage:
const genericAnimal = new Animal();
console.log(genericAnimal.makeSound()); // "Some generic animal sound."
console.log(genericAnimal.eat()); // "The animal is eating."

const dog = new Dog();
console.log(dog.makeSound()); // "Woof! Woof!"
console.log(dog.eat()); // Inherited from `Animal`: "The animal is eating."
