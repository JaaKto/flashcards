const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config()

const authRoutes = require("./routes/auth");
const flashcardRoutes = require("./routes/flashcard");
const translationRoutes = require("./routes/translation")

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/flashcard", flashcardRoutes);
app.use("/translation", translationRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((_) => {
    console.log("Connected")
    app.listen(4000)
  })
  .catch((err) => console.log(err))

module.exports = app