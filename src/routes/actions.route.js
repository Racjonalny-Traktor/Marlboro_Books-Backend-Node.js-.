const express = require('express');
const router = express.Router();
const ActionsController = require('../controllers/actions.controller');

router.get('/book', ActionsController.getAllBooksData);
router.post('/book', ActionsController.addBookToStore);

module.exports = router;
