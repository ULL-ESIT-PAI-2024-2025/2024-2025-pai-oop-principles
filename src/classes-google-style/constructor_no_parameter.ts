/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates how to correctly declare a Class according to Google TS Style 
 * Guide.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 20/02/2025
 */

/**
 * Class representing a dog.
 * @class
 */
class Dog { 
  readonly numberOfPaws: number; 

  /**
   * Creates an instance of Dog.
   * @constructor
   */  
  constructor() { 
    this.numberOfPaws = 4; 
  } 
}

/**
 * Class representing a dog. Constructor has no parameters,
 * so no need to specify it.
 * @class
 */
class DogNoConstructor { 
  readonly numberOfPaws: number = 4; 
}