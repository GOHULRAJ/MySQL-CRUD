var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:"crud_node"
});

con.connect(function(err){
    if (err) throw err;
    var sql="select * from customer";
    con.query(sql,function(err,result,fields){
        if (err) throw err;
        console.log(result);

    });

});