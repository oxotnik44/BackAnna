"use strict";
const db = require("../db");

exports.getTodoList = (req, res) => {
  db.query(
    `
    SELECT * FROM "todolist"."todolist";
`,
    (error, result) => {
      if (error) {
        // обработка ошибки, если необходимо
        console.error("Ошибка выполнения запроса:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
        return;
      }

      const rows = result.rows;
      res.status(200).json(rows);
    }
  );
};

exports.getTodoListById = (req, res) => {
  const id = req.body;
  db.query(
    `
    SELECT * FROM "todolist"."todolist" WHERE id = 1;
`,
    
    (error, result) => {
      if (error) {
        // обработка ошибки, если необходимо
        console.error("Ошибка выполнения запроса:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
        return;
      }

      const rows = result.rows;
      res.status(200).json(rows);
    }
  );
};
