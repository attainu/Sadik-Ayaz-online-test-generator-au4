const express = require("express");
const router = express.Router();
const question = require('./controller/question');
const authentication = require('./controller/authentication');


router.post('/signup', authentication.signup);
router.post('/login', authentication.login);
router.post('/question/create',question.create);

module.exports = router;