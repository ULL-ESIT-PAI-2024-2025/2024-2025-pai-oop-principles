/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates Delegation for Behavior Reuse:
 * Multiple devices (`Printer`, `Fax`, `Scanner`) reuse `PrintService` to print documents.
 *
 * @author idk
 * @since 18/02/2025
 */

/**
 * Provides printing functionality.
 */
class PrintService {
  /**
   * Prints a document.
   * @param {string} content - The content to print.
   * @returns {string} The printed message.
   */
  public print(content: string): string {
    return `Printing: ${content}`;
  }
}

/**
 * Represents a printer that delegates printing to `PrintService`.
 */
class Printer {
  private service: PrintService;

  /**
   * Creates a Printer with a PrintService.
   * @param {PrintService} service - The service that handles printing.
   */
  public constructor(service: PrintService) {
    this.service = service;
  }

  /**
   * Prints a document via delegation.
   * @param {string} document - The document to print.
   * @returns {string} The print output.
   */
  public printDocument(document: string): string {
    return this.service.print(document);
  }
}

/**
 * Represents a fax machine that delegates printing to `PrintService`.
 */
class Fax {
  private service: PrintService;

  /**
   * Creates a Fax with a PrintService.
   * @param {PrintService} service - The service that handles printing.
   */
  public constructor(service: PrintService) {
    this.service = service;
  }

  /**
   * Prints a fax via delegation.
   * @param {string} faxDocument - The document to fax.
   * @returns {string} The print output.
   */
  public printFax(faxDocument: string): string {
    return this.service.print(faxDocument);
  }
}

// Example usage:
const service = new PrintService();
const printer = new Printer(service);
const fax = new Fax(service);

console.log(printer.printDocument('Report')); // Outputs: Printing: Report
console.log(fax.printFax('Contract'));        // Outputs: Printing: Contract