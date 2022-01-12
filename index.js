const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
