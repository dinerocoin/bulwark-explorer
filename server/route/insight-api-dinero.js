
const express = require('express');
const blockex = require('../handler/blockex');
const iquidus = require('../handler/iquidus');

const router = express.Router();

// Iquidus Explorer routes.
router.get('/currency', blockex.getCurrency);
router.post('/tx/send', iquidus.sendrawtransaction);
router.post('/tx/sendix', iquidus.sendrawtransactionix);

module.exports =  router;
