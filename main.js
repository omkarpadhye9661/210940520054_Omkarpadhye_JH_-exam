const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { selectAllMsg, addMsg } = require("./user");

app.get("/msg", async (req, res) => {
    const list = await selectAllMsg();
    res.json(list);
    console.log("Get Message");
});

app.post("/add-msg", async (req, res) => {
    const user = req.body;
    await addMsg(user);
    res.json({ message: "Message added successfully...!" });
});


app.listen(5000, () => console.log("server started"));