"use strict";
const express = require("express");
const app = express();
const scheduleRouter = require("./anna/todolistRouter");

scheduleRouter(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
