/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Ilustrates a good and bad example some functions with too many parameters
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * A function with to many params
 * @param startTime The initial time to turn on the microwave
 * @param finishTime The time to stop the microwave
 * @param alarmTime The duration of the the alarm 
 * @param foodWeight The weight of the food that modifies the final time
 * @returns The final timer to set
 */
function setMicrowaveTimer(startTime: number, finishTime: number,    
                            alarmTime: number, foodWeight: number): number {
  let finalTime = finishTime - startTime;
  let foodTime = finalTime * (foodWeight / 100);
  return foodTime + alarmTime;
}

/**
 * A function that gets the time the microwave will work
 * @param startTime The initial time to turn on the microwave
 * @param finishTime The time to stop the microwave
 * @returns The final time the microwave will work
 */
function getFinalTime(startTime: number, finishTime: number): number {
  return finishTime - startTime;
}

/**
 * A function that returns the time modified by the food weight
 * @param finalTime The time the microwave will work
 * @param foodWeight The weight of the food that modifies the final time
 * @returns The modified time
 */
function getFoodTime(finalTime: number, foodWeight: number): number {
  return finalTime * (foodWeight / 100);
}

/**
 * A function that adds the alarm time to the modified time by the food weight
 * @param foodTime The modified time
 * @param alarmTime The duration of the the alarm
 * @returns 
 */
function getFinalTimer(foodTime: number, alarmTime: number): number {
  return foodTime + alarmTime;
}