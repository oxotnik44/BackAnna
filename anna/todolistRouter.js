"use strict";

module.exports = (app) => {
  const todolistController = require("./todolistController");

  app.route("/getTodoList").get(todolistController.getTodoList);
  app.route("/getTodoListById").post(todolistController.getTodoListById);
};
