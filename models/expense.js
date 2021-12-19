const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({

      payerid:{
          type: String,
          required: true
      },
      paid:{
        type: Number,
        require: true
      },
      owers:[
          {
         owerid:{
           type:String
         },
         amt:{
           type: Number
         }  
        }
      ],
      name:{
      	type: String,
      	required: true
      },
      amount:{
          type: Number,
          require: true
      }
});

const expense = mongoose.model('expense',ExpenseSchema);
module.exports = expense;