/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates  bad and good naming examples.
 * 
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @brief Examples on how to not name variables and functions.
 * @since 18/02/2025
 */


let x = 10; // ❌ Too generic, violates 'Avoid Disinformation'

let accountList: string[] = ['Alice', 'Bob']; // ❌ Redundant type, violates 'Avoid Disinformation'

let a1 = 'data1', a2 = 'data2'; // ❌ Meaningless, violates 'Make Meaningful Distinctions'

let m_description = 'A product'; // ❌ Uses prefix encoding, violates 'Avoid Encoding'

let info = 'User information'; // ❌ Too vague, violates 'Make Meaningful Distinctions'

function doStuff() { 
  console.log('Doing something'); 
} // ❌ Not intention-revealing, violates 'Use Intention-Revealing Names'

function eatMyShorts() { 
  console.log('Aborting operation'); 
} // ❌ Cute/jokey name, violates 'Don’t Be Cute'

class UserClass { 
  name: string; 
} // ❌ Redundant suffix, violates 'Use Nouns for Class Names'

function processData(data: any) { 
  console.log('Processing data'); 
} // ❌ Too generic, violates 'Use Intention-Revealing Names'

function retrInfo() { 
  return 'Info'; 
} // ❌ Uses abbreviation, violates 'Avoid Mental Mapping'
