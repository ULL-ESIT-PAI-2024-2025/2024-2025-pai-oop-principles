/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates good naming examples.
 * 
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @brief Examples on how to name variables and functions.
 * @since 18/02/2025
 */

let userAge: number = 25; // ✅ Intention-revealing, clear meaning

let accounts: string[] = ['Alice', 'Bob']; // ✅ No redundant type name

let isUserLoggedIn: boolean = true; // ✅ Boolean predicate follows 'is' convention

function getUserProfile(userId: number): string { 
  return `Profile of user ${userId}`; 
} // ✅ Clear function name for retrieving a profile

function setUserName(name: string): void { 
  console.log(`User name set to ${name}`); 
} // ✅ Uses 'set' for mutator methods

function fetchCustomerOrders(customerId: number): string[] { 
  return [`Order1 for ${customerId}`, `Order2 for ${customerId}`]; 
} // ✅ Clear and searchable, describes action

function calculateInvoiceTotal(invoiceItems: number[]): number { 
  return invoiceItems.reduce((sum, item) => sum + item, 0); 
} // ✅ Verb for function, clear action

class Product { 
  description: string; 
} // ✅ Uses a noun for a variable name

function validateEmailFormat(email: string): boolean { 
  return /\S+@\S+\.\S+/.test(email); 
} // ✅ Clearly describes the purpose of the function

function fetchUserData(userId: number): object { 
  return { id: userId, name: 'Alice' }; 
} // ✅ Consistent use of 'fetch' instead of mix-and-matching 'retrieve' or 'get'