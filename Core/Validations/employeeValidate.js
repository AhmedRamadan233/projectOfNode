






const { body,param } = require('express-validator');

module.exports.addEmployee = [

    body('_id'),
    body('firstName').isString().withMessage('Invalid first name'),
    body('lastName').isString().withMessage('Invalid last name'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('birthDate').isDate().withMessage('Invalid birth date'),
    body('hireDate').isDate().withMessage('Invalid hire date'),
    body('image'),
    body('salary').isNumeric().withMessage('Invalid salary'),


];

module.exports.updateEmployee = [
    body('_id').optional(),
    body('firstName').optional().isString().withMessage('Invalid first name'),
    body('lastName').optional().isString().withMessage('Invalid last name'),
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('birthDate').optional().isDate().withMessage('Invalid birth date'),
    body('hireDate').optional().isDate().withMessage('Invalid hire date'),
    body('image').optional(),
    body('salary').optional().isNumeric().withMessage('Invalid salary'),
]



