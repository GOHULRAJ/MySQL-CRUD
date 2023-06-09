var mysql=require("mysql")
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'crud_node'

});
con.connect(function(err){
    if (err) throw err;
    var sql="update customer set address='Mayiladuthurai' where address='kokkur' ";
    con.query(sql,function (err,result){
        if (err) throw err;
         console.log(result.affectedRows+" -->Data Updated successfully!");
    })
})