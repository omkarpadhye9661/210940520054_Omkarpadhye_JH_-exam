const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "project",
};


const selectAllMsg = async() => {
    const connection = mysql.createConnection(dbinfo); 
    await connection.connectAsync();
    console.log("server started");
    
    let sql = `select * from message`;
    const list = await connection.queryAsync(sql);
    console.log(list);

    await connection.endAsync();
    return list;
};


const addMsg = async (user) => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    let sql = `insert into message (msg_record) values (?)`;
    connection.queryAsync(sql, [user.msg_record]);
    console.log("Message added");

    await connection.endAsync();
}

module.exports = { selectAllMsg, addMsg };

selectAllMsg();

const user = {
    msg_record:"Hello world...! How are you..?"
}

addMsg(user);