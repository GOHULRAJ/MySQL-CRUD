var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"crud_node"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql="create table customer(name varchar(20),address varchar(50))";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("table created successfully");
        
    });

});