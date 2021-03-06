const express = require("express");
// const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
//creating instance of that variable
dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept json data
//creating our express api, initiating a get request to the / route, takes a parameter which is a callback
//the callback takes request and response. We're going to send a response to the / route.
app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);
//use PORT or if not 5000
const PORT = process.env.PORT || 5000;

//now with app variable we can start our server
app.listen(PORT, console.log(`Server Started on ${PORT}`.yellow.bold));

//to run file in terminal write npm start
//everytime we write something on this file we have to restart our server.
