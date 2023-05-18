const express = require('express');
const router = express.Router();
const controlMain = require('../controllers/main');

/* GET home page. */
router.get('/', controlMain.index);

module.exports = router;
