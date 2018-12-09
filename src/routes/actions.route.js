const express = require('express');
const router = express.Router();
const ActionsController = require('../controllers/actions.controller');

router.get('/book', ActionsController.getAllBooksData);
router.delete('/book', ActionsController.removeBookFromStore);
router.post('/book', ActionsController.addBookToStore);
router.patch('/book', ActionsController.editBookData);

module.exports = router;
