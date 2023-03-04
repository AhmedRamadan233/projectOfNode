





const { body,param } = require('express-validator');

module.exports.addBook=[
    body('id').notEmpty().withMessage('Id is required'),
    body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string'),
    body('author').notEmpty().withMessage('Author is required').isString().withMessage('Author must be a string'),
    body('publisher').optional().isString().withMessage('Publisher must be a string'),
    body('publishingDate').optional().isDate().withMessage('Publishing date must be a valid date'),
    body('category').optional().isString().withMessage('Category must be a string'),
    body('edition').optional().isInt().withMessage('Edition must be an integer'),
    body('pages').optional().isInt().withMessage('Pages must be an integer'),
    body('noOfCopies').notEmpty().withMessage('Number of copies is required').isInt().withMessage('Number of copies must be an integer'),
    body('available').notEmpty().withMessage('Availability is required').isBoolean().withMessage('Availability must be a boolean'),
    body('shelfNo').optional().isString().withMessage('Shelf number must be a string')

    
];

module.exports.updateAdmin = [
    body('id').optional().notEmpty().withMessage('Id is required'),
    body('title').optional().notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string'),
    body('author').optional().notEmpty().withMessage('Author is required').isString().withMessage('Author must be a string'),
    body('publisher').optional().isString().withMessage('Publisher must be a string'),
    body('publishingDate').optional().isDate().withMessage('Publishing date must be a valid date'),
    body('category').optional().isString().withMessage('Category must be a string'),
    body('edition').optional().isInt().withMessage('Edition must be an integer'),
    body('pages').optional().isInt().withMessage('Pages must be an integer'),
    body('noOfCopies').optional().notEmpty().withMessage('Number of copies is required').isInt().withMessage('Number of copies must be an integer'),
    body('available').optional().notEmpty().withMessage('Availability is required').isBoolean().withMessage('Availability must be a boolean'),
    body('shelfNo').optional().isString().withMessage('Shelf number must be a string')

]
