
module.exports = function(app){
    dbManager = require('../scripts/dbManager.js');
    console.log(dbManager.getUsers());
   //console.log(__dirname);
    app.get('/',(req,res)=>{
       // console.log(__dirname+"../views/");
       res.render('../views/login.html');
    });
}