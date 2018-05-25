var express = require('express'),
    path = require('path'),
    queries = require('./modules/queries'),
    con = require('./modules/connection'),
    bodyParser = require('body-parser'),
    app = express();
    app.engine("html",require("ejs").renderFile);
    app.set('views',path.join(__dirname,'views'));
    app.use(express.static(__dirname+'views'));
    app.use('/assets',express.static(__dirname+'/assets'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.get('/visits',function(req,res){
        query = queries.visits();
        con.getData(query,result=>{
            console.log("Res",result);
            res.render("visits/index.html",{
                page:{title:'PadiApp | Kunjungan',title1:'Kunjungan',title2:'histori'},
                data:result
            });
        });
    })
    app.get('/offers',function(req,res){
        query = queries.offers();
        con.getData(query,result=>{
            console.log("Res",result);
            res.render("offers/index.html",{
                page:{title:'PadiApp | Penawaran',title1:'Penawaran',title2:'histori'},
                data:result
            });
        });
    })
    app.get('/offersadd',function(req,res){
        query = queries.visits();
        con.getData(query,result=>{
            console.log("Rs",result);
            res.render("offers/add.html",{
                page:{title:'PadiApp | Penambahan Penawaran',title1:'Penawaran',title2:'penambahan'},
                data:result
            });
        });
    })
    app.post('/offersave',function(req,res){
        var data = req.body;
        console.log(data);
    })
app.listen(1947);