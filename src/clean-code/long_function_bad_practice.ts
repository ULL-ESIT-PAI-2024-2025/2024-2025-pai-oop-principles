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
 * @since 20/02/2025
 */

/**
 * Generates a user report.
 * @param {User} currentUser - The user for whom the report is generated.
 * @returns {void}
 */
function generateUserReport(user: User) : void { 
  console.log(`User Report for ${user.name}`); 
  let totalSpent = 0; 
  for (let order of user.orders) { 
    totalSpent += order; 
  } 
  let category = ''; 
  if (totalSpent > 1000) { category = 'VIP'; } 
  else if (totalSpent > 500) { category = 'Premium'; } 
  else { 
    category = 'Regular';
  } 
  console.log(`Total Spent: ${totalSpent}`); 
  console.log(`User Category: ${category}`); 
}