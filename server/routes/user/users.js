var express = require('express');
var router = express.Router();

const { register, login } = require('./userServices');
router.post('/register', (req, res) => register(req, res));
router.post('/login', (req, res) => login(req, res));

module.exports = router;
