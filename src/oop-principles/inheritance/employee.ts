/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates **Inheritance with Extra Methods**:
 * - `Employee` is the superclass with shared properties and methods.
 * - `Manager` is a subclass that **adds** `assignTask()`, extending functionality.
 * - Shows how subclasses can introduce new behaviors while inheriting common ones.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents an employee with a salary.
 */
export class Employee {
  constructor(public name: string, public salary: number) {}

  /**
   * Gets the employee details.
   * @returns {string} A description of the employee.
   */
  public getDetails(): string {
    return `${this.name} earns $${this.salary} per year.`;
  }
}

/**
 * Represents a manager, who is also an employee but can assign tasks.
 */
export class Manager extends Employee {
  /**
   * Assigns a task to an employee.
   * @param {string} task - The task to assign.
   * @returns {string} A message confirming the task assignment.
   */
  public assignTask(task: string): string {
    return `${this.name} assigned the task: ${task}`;
  }
}

// Example usage:
const emp = new Employee('Alice', 50000);
console.log(emp.getDetails()); // 'Alice earns $50000 per year.'

const manager = new Manager('Bob', 80000);
console.log(manager.getDetails()); // 'Bob earns $80000 per year.'
console.log(manager.assignTask('Finish the report')); // 'Bob assigned the task: Finish the report'