mysql = require('promise-mysql'),
config = require('./config.js');
getData = (sql,callback)=>{
    console.log("Host",config.database.host);
    console.log("Dabs",config.database.database);
    console.log("User",config.database.user);
    console.log("Pass",config.database.password);
    mysql.createConnection({
        host:config.database.host,
        user:config.database.user,
        password:config.database.password,
        database:config.database.database
    })
    .then(con=>{
        var res = con.query(sql);
        con.end();
        return res;
    })
    .then(res=>{
        callback(res);
    })
    .error(err=>{
        console.log("Err",err);
    });
}
module.exports = {
    getData : getData
}