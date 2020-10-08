const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const flashcardsRoutes = require("./routes/flashcards");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
// app.use(flashcardsRoutes);

app.listen(4000);
