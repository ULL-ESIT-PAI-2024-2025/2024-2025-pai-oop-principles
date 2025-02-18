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

class Door {
  public open(): string {
    return 'Door is open!';
  }

  public close(): string {
    return 'Door closed!';
  }
}



class DoorBad {
  public open(): string {
    return 'Door is open!';
  };
  public close(): string {
    return 'Door closed!';
  };

};

