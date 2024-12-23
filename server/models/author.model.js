const db = require("../config/db");
class Author {
  constructor(author) {
    this.firstName = author.firstName;
    this.lastName = author.lastName;
  }

  static async create(author) {
    const [result] = await db.execute("INSERT INTO author SET ?", [author]);
    return result;
  }

  static async queryAllAuthors() {
    const [rows] = await db.execute(`SELECT * FROM author`);
    return rows;
  }

  static async queryByAuthorId(authorId) {
    const [result] = await db.execute(
      `SELECT * FROM author WHERE authorId = ?`,
      [authorId]
    );
    return result;
  }

  static async updateByAuthorId(author, authorId) {
    const [rows] = await db.execute(
      "UPDATE author SET firstName = ?, lastName = ? WHERE authorId = ?",
      [author.firstName, author.lastName, authorId]
    );
    return rows;
  }

  static async deleteByAuthorId(authorId) {
    const [result] = await db.execute("DELETE FROM author WHERE authorId = ?", [
      authorId,
    ]);
    return result[0];
  }

  static async queryCount() {
    const [result] = await db.execute(
      "SELECT COUNT(*) AS authorsCount FROM author"
    );
    const authorsCount = result[0].authorsCount;

    return authorsCount;
  }
}

module.exports = Author;
