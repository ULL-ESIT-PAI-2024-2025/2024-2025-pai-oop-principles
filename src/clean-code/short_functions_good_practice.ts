/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates 'Keep functions short'.
 * 
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @brief Example on how to decompose a function into smaller ones.
 * @since 18/02/2025
 */

/**
 * Prints a user report.
 * @param {User} currentUser - The user for whom the report is generated.
 * @returns {void}
 */
function printUserReport(currentUser: User) : void {
  console.log(`User Report for ${currentUser.name}`);
  const totalSpent = calculateTotalSpent(currentUser.orders);
  console.log(`Total Spent: $${totalSpent}`);
  console.log(`User Category: ${determineUserCategory(totalSpent)}`);
 }
 
 /**
 * Calculates the total amount spent by the user.
 * @param {number[]} orders - The list of orders made by the user.
 * @returns {number} The total amount spent.
 */
 function calculateTotalSpent(orders: number[]): number {
   return orders.reduce((sum, order) => sum + order, 0);
 }
 
 /**
 * Determines the user category based on the total amount spent.
 * @param {number} totalSpent - The total amount spent by the user.
 * @returns {string} The user category.
 */
 function determineUserCategory(totalSpent: number): string {
   if (totalSpent > 1000) return 'VIP';
   if (totalSpent > 500) return 'Premium';
   return 'Regular';
 }
 
 