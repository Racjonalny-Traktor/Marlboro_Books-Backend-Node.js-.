const BookSchema = require('../models/book.model');
const ErrorHandler = require('../helpers/errors.helper');

const addBookToStore = async (req, res, next) => {

    const { title, desc, author } = req.body;
    let book;

    if (req.body.print) {
        const { print } = req.body;
        book = new BookSchema({ title, desc, author, print });
    }

    try {
        if (book) book = new BookSchema({ title, desc, author });
        await book.save();

        res.status(200).send({
            success: true,
            msg: `Added ${title} to store`
        });
    } catch (error) {
        console.error('[ERROR] Actions: Error occured while adding book to store');
        ErrorHandler.throwError(res, error);
    }
    console.log('[SUCCESS] Actions: Added book to store');
}

const getAllBooksData = async (req, res, next) => {
    try {
        const booksData = await BookSchema.find();
        console.log(booksData) ;
        res.status(200).send({
            success: true,
            data: booksData
        });
    } catch (error) {
        console.error('[ERROR] Actions: Error occured while getting books from store')
        ErrorHandler.throwError(res, error);
    }
}

module.exports = { addBookToStore, getAllBooksData };
