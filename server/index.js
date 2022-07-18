const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addCompliment, changeCompliment, getCompliments, deleteCompliment } = require('./controller')

app.get("/api/compliments/random", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/compliments", addCompliment)
app.put("/api/compliments/:id", changeCompliment)
app.get("/api/compliments", getCompliments)
app.delete("/api/compliments/:id", deleteCompliment)

app.listen(4000, () => console.log("Server running on 4000"));
