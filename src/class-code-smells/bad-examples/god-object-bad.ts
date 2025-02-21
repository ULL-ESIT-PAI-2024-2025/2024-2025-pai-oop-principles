/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates the **God Object** code smell:
 * - The `Game` class handles **too many responsibilities** (players, inventory, enemies, game logic).
 * - Breaks the **Single Responsibility Principle (SRP)**.
 * - Hard to maintain and modify.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a game but manages **everything**.
 */
class Game {
  private players: { name: string; health: number }[] = [];
  private inventory: { item: string; quantity: number }[] = [];
  private enemies: { type: string; health: number }[] = [];

  /**
   * Adds a player to the game.
   * @param {string} name - The player's name.
   */
  public addPlayer(name: string): void {
    this.players.push({ name, health: 100 });
  }

  /**
   * Adds an item to the game inventory.
   * @param {string} item - The item name.
   * @param {number} quantity - The quantity.
   */
  public addItem(item: string, quantity: number): void {
    this.inventory.push({ item, quantity });
  }

  /**
   * Spawns an enemy in the game.
   * @param {string} type - The type of enemy.
   * @param {number} health - The health of the enemy.
   */
  public spawnEnemy(type: string, health: number): void {
    this.enemies.push({ type, health });
  }

  /**
   * Starts the game.
   */
  public start(): void {
    console.log('Game started!');
  }

  /**
   * Simulates an attack from a player to an enemy.
   * @param {string} playerName - The name of the player.
   * @param {string} enemyType - The type of the enemy.
   */
  public attackEnemy(playerName: string, enemyType: string): void {
    console.log(`${playerName} attacks a ${enemyType}`);
  }
}

// Example usage:
const game = new Game();
game.addPlayer('Alice');
game.addItem('Sword', 1);
game.spawnEnemy('Dragon', 200);
game.start();
game.attackEnemy('Alice', 'Dragon'); // Game should not handle all logic directly