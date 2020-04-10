const express = require("express");
const router = express.Router();
const question = require('./controller/question');
const authentication = require('./controller/authentication');
const test = require('./controller/test');
const user = require('./controller/user');

router.post('/signup', authentication.signup);
router.post('/login', authentication.login);
router.post('/question/create',question.create);
router.post('/test/create',test.create);

router.get('/test/read/:id',test.readById);
router.get('/user/read/:id',user.readById);

module.exports = router;