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
    var sql="insert into customer(name,address) values('Hari','Mayiladuthurai'),('gohul','kokkur')";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Values inserted Successfully");
        
    });

});