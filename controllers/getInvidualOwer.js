const MongoClient = require('mongodb').MongoClient;
const dotEnv = require('dotenv').config();
const user = require('../models/user.js');

const dburl = process.env.URI;

const getIndividualOwer = (req,res) => {

    MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true}, (err,client) => {

           if(err){
               return res.send(err);
           }
           else{
            const coll = client.db("SplitDb").collection("expenses");
            coll.find({$and:[{payerid:req.params.payerid},{ owers : { $elemMatch : { owerid : req.body.owerid} } }]}).toArray((err,result) => {
                    
                if(err){
                    console.log(err);
                }
                else{
                      
                  getName =  result.map((data) => {
                        return data.name;
                    });
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
              res.send(`Total owing amount to ${getName} is ${sum}`);

                }
            });
        }
    });
}

module.exports = {getIndividualOwer};