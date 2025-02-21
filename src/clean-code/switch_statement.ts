/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates 'Avoid switch statements as much as possible'.
 * 
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @brief Example on how to refactor a switch statement.
 * @since 18/02/2025
 */

// Unnecesary Switch statement:
function getDiscount(clientType: string): number {
  switch (clientType) {
    case 'Regular': return 5;
    case 'Premium': return 10;
    case 'VIP': return 20;
    default: return 0;
  }
}

let currentDiscount : number = getDiscount('VIP');

// Now, we drop the Switch statement using polymorphism:
interface Customer {
  getDiscount(): number;
}

class Regular implements Customer {
  getDiscount(): number { return 5; }
}

class VIP implements Customer {
  getDiscount(): number { return 20; }
}

const customer: Customer = new VIP();
console.log(customer.getDiscount()); // 20
