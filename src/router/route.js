const express = require('express');
const router = express.Router() 

const bitcoin = require('../blockChainModel/blockController')

router.get('/bitcoin', bitcoin.getCoins)


module.exports = router