const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5438,
  user: "postgres",
  password: "1234",
  database: "postgres",
});

pool.connect((err) => {
  if (err) {
    console.error("Ошибка подключения к базе данных PostgreSQL:", err);
    return;
  }
  console.log("Подключение к базе данных PostgreSQL успешно установлено");
});
module.exports = pool;
