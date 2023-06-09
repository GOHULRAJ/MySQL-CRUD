var mysql=require("mysql");
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'crud_node'
});

con.connect(function(err){
    if (err) throw err;
    var sql="delete from customer where name='gohul' ";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Number of rows deleted:"+result.affectedRows)

    })
})