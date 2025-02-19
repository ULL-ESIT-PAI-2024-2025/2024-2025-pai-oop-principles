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

// Class and class methods declaration:
class Door {
  public open() {
    console.log('Door is open');
  }

  public close() {
    console.log('Door closed!');
  }
}

// Constructors examples:
new Door().open(); // This is a correct Constructor call. Always use parentheses.
new Door.open(); // This call is not correct. It also creates an error.

class Example {
  constructor(creationMessage: string) {
    console.log("Don't mind me.");
  }
}

class BadExample extends Example {
  myField = 10;
  constructor(message: string) { // BAD: Only calls parent constructor.
    super(message);
  }
}

class BadExampleEmpty {
  constructor() { } // BAD: Empty Constructor is not necessary.
}


class GoodExample {
  myField = 10;

  constructor(private readonly ctorParam) {} // Constructor separado por líneas en blanco

  calculateSum() {
    console.log(1 + 1);
  }
}

class DefaultConstructor {
  // Constructor por defecto proporcionado por ES2015
}
