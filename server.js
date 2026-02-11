const express = require("express");
const app = express();
const dbconfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')

app.use('/api/rooms' , roomsRoute)


const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on using nodemon ${PORT}`);
});