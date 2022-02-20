const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
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

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

//creating a new endpoint
app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

//use PORT or if not 5000
const PORT = process.env.PORT || 5000;

//now with app variable we can start our server
app.listen(PORT, console.log(`Server Started on ${PORT}`.yellow.bold));

//to run file in terminal write npm start
//everytime we write something on this file we have to restart our server.
