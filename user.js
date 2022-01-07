const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
     host: "localhost",
     user: "root",
     password: "password",
     database: "webexam",
     };

    
    

    const addmessage = async (message) =>{
      const Connection = mysql.createConnection(dbinfo);
      
      await Connection.connectAsync();
      let sql = `Insert into MESSAGE values (?)`;

      await connection.queryAsync(aql, [message.messagebody]);
      await connection.endAsync();
    };
 
    const message = {
      messagebody:" hi amnkdax"
    };

    const showMessage = async () => {
      const connection = mysql.createConnection(dbinfo);
      await connection.connectAsync();
      let sql = `select * from MESSAGE`;
      let list = await connection.queryAsync(sql);
      console.log(list);
      await connection.endAsync();
      return list;
    }

    showMessage();




