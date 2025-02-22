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
 * @since 18/02/2025
 */

/**
 * Example class demonstrating constructor usage.
 * @class
 */
class Example {
  /**
   * Creates an instance of Example.
   * @param {string} creationMessage - The message to be logged.
   * @constructor
   */
  constructor(creationMessage: string) {
    console.log('Don\'t mind me.');
  }
}

/**
 * Bad example class that incorrectly uses a constructor.
 * @class
 * @extends Example
 */
class BadExample extends Example {
  myField = 10;

  /**
   * Creates an instance of BadExample.
   * @param {string} message - The message to be passed to the parent constructor.
   * @constructor
   */
  constructor(message: string) { // BAD: Only calls parent constructor.
    super(message);
  }
}

/**
 * Bad example class with an unnecessary empty constructor.
 * @class
 */
class BadExampleEmpty {
  /**
   * Creates an instance of BadExampleEmpty.
   * @constructor
   */
  constructor() { } // BAD: Empty Constructor is not necessary.
}

/**
 * Good example class demonstrating proper constructor usage.
 * @class
 */
class GoodExample {
  myField = 10;

  /**
   * Creates an instance of GoodExample.
   * @param {any} ctorParam - The parameter to be used in the constructor.
   * @constructor
   */  
  constructor(private readonly ctorParam) {} // Constructor separated by empty lines.

  /**
   * Calculates the sum of 1 + 1 and logs it.
   * @method
   */  
  calculateSum() {
    console.log(1 + 1);
  }
}

/**
 * Example class with a default constructor.
 * @class
 */
class DefaultConstructor {
  // No need to specify a constructor. It is provided by ES2016.
}
