/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates **Polymorphism using Method Overriding**:
 * - `Animal` defines `makeSound()`, which is overridden in subclasses.
 * - `Dog` and `Cat` provide their own implementation of `makeSound()`.
 * - Example of **dynamic method dispatch**.
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
   * Produces a generic sound.
   * @returns {string} A default animal sound.
   */
  public makeSound(): string {
    return 'Some generic animal sound.';
  }
}

/**
 * Represents a dog, which is a type of animal.
 */
export class Dog extends Animal {
  /**
   * Produces a dog-specific sound.
   * @returns {string} A message indicating the dog's bark.
   */
  public makeSound(): string {
    return 'Woof! Woof!';
  }
}

/**
 * Represents a cat, which is a type of animal.
 */
export class Cat extends Animal {
  /**
   * Produces a cat-specific sound.
   * @returns {string} A message indicating the cat's meow.
   */
  public makeSound(): string {
    return 'Meow!';
  }
}

// Example usage:
const animals: Animal[] = [new Dog(), new Cat(), new Animal()];

animals.forEach((animal) => {
  console.log(animal.makeSound()); // Different outputs depending on the object type.
});
