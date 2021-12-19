const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/addExpense');
const totalIndividualOwer = require('../controllers/getTotalIndividualOwer');
const individualOwer = require('../controllers/getInvidualOwer');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/addExpense/:payerid',expenseController.addExpense);
router.get('/getTotalIndividualOwer/:userid', totalIndividualOwer.getTotalIndividualOwer);
router.get('/getIndividualOwer/:payerid',individualOwer.getIndividualOwer);

module.exports = router;