const { check } = require("express-validator");

const addUserValidator = [check('name').isLength({ min: 1 }).withMessage('Name is required').isAlpha('en-US', { ignore: ' -' }).withMessage('Enter name with only alpha').trim(),
check('email').isEmail().withMessage('Please Enter a valid email address!').trim().custom(async (value) => {

})
]

module.exports = {
    addUserValidator
};
