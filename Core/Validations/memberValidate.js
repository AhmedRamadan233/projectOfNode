





const { body,param } = require('express-validator');

module.exports.addMember =[
    body('id').optional(),
    body('firstName').isString().withMessage('Invalid First Name'),
    body('lastName').isString().withMessage('Invalid Last Name'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('image').optional(),
    body('phoneNumber').isString().withMessage('Invalid Phone Number'),
    body('birthDate').isDate().withMessage('Invalid Birth Date'),
    body('fullAddress').optional(),
    body('createdAt').optional(),

    
];

module.exports.updateMember = [
    body('id').optional(),
    body('firstName').optional().isString().withMessage('Invalid First Name'),
    body('lastName').optional().isString().withMessage('Invalid Last Name'),
    body('email').optional().isEmail().withMessage('Invalid Email'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('image').optional(),
    body('phoneNumber').optional().isString().withMessage('Invalid Phone Number'),
    body('birthDate').optional().isDate().withMessage('Invalid Birth Date'),
    body('fullAddress').optional(),
    body('createdAt').optional(),

]







