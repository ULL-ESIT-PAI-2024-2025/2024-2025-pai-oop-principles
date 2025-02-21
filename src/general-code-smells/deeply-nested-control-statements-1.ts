/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example of a deeply nested control statements
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */


const HOURS_IN_DAY: number = 24;
if (HOURS_IN_DAY > 0) {
  if (HOURS_IN_DAY < 25) {
    console.log('Hours: ' + HOURS_IN_DAY);
  }
}

if (HOURS_IN_DAY > 0 && HOURS_IN_DAY < 25) {
  console.log('Hours: ' + HOURS_IN_DAY);
}