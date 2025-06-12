import { useSQLiteContext } from "expo-sqlite";

export function useCardDatabase() {
  const { database } = useSQLiteContext();

  async function getAllCards() {
    const result = await database.execAsync("SELECT * FROM cards");
    return result[0].rows._array;
  }

  async function addCard(card) {
    const { title, quantity, price, image } = card;
    await database.execAsync(
      `INSERT INTO cards (title, quantity, price, image) VALUES (?, ?, ?, ?)`,
      [title, quantity, price, image]
    );
  }

  async function incrementCardQuantity(cardId) {
    await database.execAsync(
      `UPDATE cards SET quantity = quantity + 1 WHERE id = ?`,
      [cardId]
    );
  }
  async function decrementCardQuantity(cardId) {
    const result = await database.execAsync(
      `SELECT quantity FROM cards WHERE id = ?`,
      [cardId]
    );
    const quantity = result[0].rows._array[0]?.quantity;
    if (quantity > 1) {
      await database.execAsync(
        `UPDATE cards SET quantity = quantity - 1 WHERE id = ?`,
        [cardId]
      );
    }

    async function deleteCard(cardId) {
      await database.execAsync(`DELETE FROM cards WHERE id = ?`, [cardId]);
    }
  }

  return {
    getAllCards,
    addCard,
    incrementCardQuantity,
    decrementCardQuantity,
    deleteCard,
  };
}