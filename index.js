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
        query = queries.visits();
        con.getData(query,result=>{
            console.log("Res",result);
            res.render("visits/index.html",{mypage:{title1:'Kunjungan',title2:'histori'},data:result});
        });
    })
    app.get('/offers',function(req,res){
        query = queries.visits();
        con.getData(query,result=>{
            console.log("Res",result);
            res.render("offers/index.html",{mypage:{title1:'Penawaran',title2:'histori'},data:result});
        });
    })
    app.get('/offersAdd',function(req,res){
        query = queries.visits();
        con.getData(query,result=>{
            console.log("Rs",result);
            res.render("offers/add.html",{mypage:{title1:'Kunjungan',title2:'histori'},data:result});
        });
    })
app.listen(1947);