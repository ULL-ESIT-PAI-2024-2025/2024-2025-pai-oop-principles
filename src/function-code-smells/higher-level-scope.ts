/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example of lack of handling of exceptions
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

let nonConstGlobalVariable: string = 'Hello from outside';
function sayGlobalHello() {
  console.log(nonConstGlobalVariable);
}

function sayScopeHello(scopeHello: string = 'Hello from scope') {
  console.log(scopeHello);
}

sayGlobalHello();
sayScopeHello();