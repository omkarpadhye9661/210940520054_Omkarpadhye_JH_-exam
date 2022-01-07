const  express = require('express');
const app = express();
app.use(express.json());
const {addRecord, getRecord} =require('./user');

const cors = require('cors');
app.use(cors());

app.get("/get-records",async(req,res) =>{
    const list = await getRecord();
    res.json(list);
});

app.post("/add-records",async (req,res) =>{
    const user = req.body;
    await addRecord(user);
    res.json("new record added..");
});

app.listen(4800, () =>{
    console.log("done dana done...")
});

const addRecord = async (record) =>{
    const connection = mysql.createconnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,reciever,msg) values(???)`;
    await connection.quieryAsync(sql,[record.sender,record.receiver,record.msg]);
    await connection.endAsync();
    console.log("message record added..");
}

const getRecord = async() =>{
    const connection = mysql.createconnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = wait connection,queryAsync(sql,[]);
    await connection.endAsync();
    console.log("list of records..");
    console.log(list);
    return list;
}
getRecord();
module.exports = { addRecord, getRecord};


