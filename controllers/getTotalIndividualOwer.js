const MongoClient = require('mongodb').MongoClient;
const dotEnv = require('dotenv').config();
const user = require('../models/user.js');

const dburl = process.env.URI;

const getTotalIndividualOwer =  (req,res) => {

    MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true}, (err,client) => {

        if(err){
             return res.json({msg:err});
          }
          else{
    
            const coll = client.db("SplitDb").collection("expenses");
            coll.find({ owers : { $elemMatch : { owerid : req.params.userid} } }).toArray((err,result) => {

                   if(err){
                     return res.send("Error",err);
                   }
                   else{
                  
                       output = result.map((data) => {
                
                       return data.owers;
                   });
                      
                   amt = output.map((dat) => {
                          return dat[0].amt;
                   }); 
                     
                    let sum =0;
                    for(let i = 0;i<amt.length;i++){
                         sum = sum + amt[i];
                    }
                    res.send({"Total owing amount":sum});
                }
            });
        }
    });
}

module.exports = {getTotalIndividualOwer};