var mysql = require("mysql2");
var dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    dateStrings: true,
  })
  .promise();

pool.on("error", (err) => {
  console.error("pool error", err);
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Successfully connected to the database.");
    connection.release();
  } catch (error) {
    throw error;
  }
}

testConnection();

module.exports = pool;
