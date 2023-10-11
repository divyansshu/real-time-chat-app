const express = require("express");
const cors = require("cors");
const chats = require("./chats");

const app = express();

app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: "https://flies-newspaper.codedamn.app",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["content-type"]
// }));

app.get("/", (req, res) => {
  res.send("hey there!").end();
});

app.get("/chats", (req,res) => {
    console.log(chats);
    res.send(chats);
})

app.listen(1338, () => {
  console.log("listening on port 1338");
});
