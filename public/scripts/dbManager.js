
module.exports = {
    getUsers:function(){
       var MongoClient = require('mongodb').MongoClient;
       const uri = "mongodb://localhost:27017/";
       let client = null;
       var data = null;
        MongoClient.connect(uri,{useNewUrlParser:true},(err,res)=>{
        client =res;
        client.db('ECommerce').collection('Users').find({}).toArray((err,docs)=>{
           // console.log(docs);
            data = docs;
        });
        });
        return data;
    }
}