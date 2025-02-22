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

