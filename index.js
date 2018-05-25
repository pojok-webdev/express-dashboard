var express = require('express'),
    path = require('path'),
    queries = require('./modules/queries'),
    con = require('./modules/connection'),
    app = express();
    app.engine("html",require("ejs").renderFile);
    app.set('views',path.join(__dirname,'views'));
    app.use(express.static(__dirname+'views'));
    app.use('/assets',express.static(__dirname+'/assets'));
    app.get('/visits',function(req,res){
        console.log("Sukes");
        query = queries.visits();
        con.getData(query,result=>{
            console.log("Rs",result);
            res.render("table_responsive.html",{mypage:{title1:'Kunjungan',title2:'histori'},data:result});
        });
    })
app.listen(1947);