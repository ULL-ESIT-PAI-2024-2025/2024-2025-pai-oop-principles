/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates how to correctly declare getters and setters of a Class.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 20/02/2025
 */

/**
 * Class representing a movie.
 * @class
 */
class Movie {
  
  /**
   * Constructor
   */  
  constructor(private readonly director: Person) { }
 
  /**
   * Gets the name of the movie.
   * @returns {string} The name of the movie or 'untitled' if the name is empty.
   */  
  public getDirectorName(): string {
    return this.director.name;
  }

  /**
   * Sets the name of the movie.
   * @param {string} newMovieName - The new name of the movie.
   */  
  public setDirectorName(newDirectorName: string) {
    this.director.name = newDirectorName;
  }
}

/**
 * Class representing a person.
 * @class
 */
class Person {
  age = 0;

  /**
   * Gets the age of the person.
   * @returns {number} The age of the person.
   */  
  public getAge() {
    return this.age++;
  }
}


/**
 * Class representing a movie.
 * @class
 */
class Movie {
  private name : string = '';
 
  /**
   * Gets the name of the movie.
   * @returns {string} The name of the movie or 'untitled' if the name is empty.
   */  
  public getName(): string {
    return this.name || 'untitled';
  }

  /**
   * Sets the name of the movie.
   * @param {string} newMovieName - The new name of the movie.
   */  
  public setName(newMovieName: string) {
    this.name = newMovieName.trim();
  }
}

/**
 * Class representing a cinema.
 * @class
 */
class Cinema {
  private releaseYear = 0;

  /**
   * Gets the release year of the cinema.
   * @returns {number} The release year of the cinema.
   */
  public getReleaseYear(): number {
    return this.releaseYear;
  }

  /**
   * Sets the release year of the cinema.
   * @param {number} newYear - The new release year to be set.
   */  
  public setReleaseYear(newYear: number) {
    this.releaseYear = newYear;
  }
}
