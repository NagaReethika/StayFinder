const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://reethikaraavi_db_user:57HbgfC0np5X5hrq@cluster0.6jtfm7r.mongodb.net/stayfinder?appName=Cluster0";

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB connection successful ✅");
  })
  .catch((error) => {
    console.log("Mongo DB Connection failed ❌");
    console.error(error.message);
  });

module.exports = mongoose;
