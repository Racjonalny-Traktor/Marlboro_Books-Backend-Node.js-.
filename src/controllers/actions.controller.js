const BookSchema = require('../models/book.model');
const ErrorHandler = require('../helpers/errors.helper');

/**
 * title-string
 * desc-string
 * author-string
 * print-?string
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const addBookToStore = async (req, res, next) => {

    const { title, desc, author, print } = req.body;
    let book;

    book = print !== undefined ? new BookSchema({ title, desc, author, print }) : new BookSchema({ title, desc, author, print: null });

    try {
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
    console.log('[SUCCESS] Actions: Returned all books from store');
}

/**
 * id-string
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const removeBookFromStore = async (req, res, next) => {
    const bookId = req.body.id;
    console.log(bookId);
    try {
        await BookSchema.findOneAndDelete({ _id: bookId });
        res.status(200).send({
            success: true,
            msg: 'Successfuly removed book from store'
        });
    } catch (error) {
        console.error('[ERROR] Actions: Error occured while removing book from store')
        ErrorHandler.throwError(res, error);
    }
    console.log('[SUCCESS] Actions: Removed book from store');
}

/**
 * id-string
 * data-object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const editBookData = async (req, res, next) => {
    const bookId = req.body.id;
    const updateData = req.body.data;
    try {
        await BookSchema.findOneAndUpdate({ _id: bookId }, updateData);
        const data = await BookSchema.findOne({_id: bookId});
        res.status(200).send({
            success: true,
            msg: 'Successfuly updated book in store',
            update: data
        });
    } catch (error) {
        console.error('[ERROR] Actions: Error occured while editing book in store')
        ErrorHandler.throwError(res, error);
    }
    console.log('[SUCCESS] Actions: Edited book in store');
}

module.exports = { addBookToStore, getAllBooksData, removeBookFromStore, editBookData };
