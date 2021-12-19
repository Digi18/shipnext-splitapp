const expense = require('../models/expense.js');

const addExpense = async (req,res) => {
    
    const {name,amount,no,owers} = req.body;
   
    const {payerid} = req.params;

    const share = amount / no;

    const result = Math.round(share*100)/100;
    
    const expens = new expense({payerid,name,no,amount,paid:result});

    try{
        const data = await expens.save();

        JSON.parse(owers).map((value) => {
            data.owers.push({
                owerid: value.owerid,
                amt: result
            })
        });

        data.save();
     
        res.send({"id":data._id}); 
    }
    catch(error){
        res.send(error);
    }
};

module.exports = {addExpense};