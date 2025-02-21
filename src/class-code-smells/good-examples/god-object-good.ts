/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * Demonstrates the **refactored solution to the God Object**:
 * - The `Game` class is now **only responsible** for game management.
 * - Players, inventory, and enemies have **separate classes**.
 * - More **maintainable, readable, and scalable**.
 *
 * @author Sofía de Fuentes Rosella
 * @author Enmanuel Vegas Acosta
 * @author Salvador González Cueto
 * @since 18/02/2025
 */

/**
 * Represents a player in the game.
 * Each player has their own inventory and attack behavior.
 */
class Player {
  private inventory = new Inventory();
  
  /**
   * Creates a new player.
   * @param {string} name - The player's name.
   * @param {number} [health=100] - The player's starting health.
   */
  constructor(public name: string, public health: number = 100) {}

  /**
   * Attacks an enemy.
   * @param {Enemy} enemy - The enemy to attack.
   */
  public attack(enemy: Enemy): void {
    console.log(`${this.name} attacks ${enemy.type}`);
  }
}

/**
 * Represents a player's inventory.
 */
class Inventory {
  private items: { item: string; quantity: number }[] = [];

  /**
   * Adds an item to the inventory.
   * @param {string} item - The item name.
   * @param {number} quantity - The quantity.
   */
  public addItem(item: string, quantity: number): void {
    this.items.push({ item, quantity });
  }
}

/**
 * Represents an enemy in the game.
 */
class Enemy {
  /**
   * Creates an enemy.
   * @param {string} type - The enemy's type.
   * @param {number} health - The enemy's health.
   */
  constructor(public type: string, public health: number) {}
}

/**
 * Manages the game state, without handling player/enemy logic directly.
 */
export class Game {
  private players: Player[] = [];
  private enemies: Enemy[] = [];

  /**
   * Adds a player to the game.
   * @param {string} name - The player's name.
   */
  public addPlayer(name: string): void {
    this.players.push(new Player(name));
  }

  /**
   * Adds an enemy to the game.
   * @param {string} type - The type of enemy.
   * @param {number} health - The health of the enemy.
   */
  public addEnemy(type: string, health: number): void {
    this.enemies.push(new Enemy(type, health));
  }

  /**
   * Starts the game.
   */
  public start(): void {
    console.log('Game started!');
  }
}

// Example usage:
const game = new Game();
game.addPlayer('Alice');
game.addEnemy('Dragon', 200);
game.start();
