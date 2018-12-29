
const express = require('express');
const blockex = require('../handler/blockex');

const router = express.Router();

// Iquidus Explorer routes.
router.get('/currency', blockex.getCurrency);


module.exports =  router;
