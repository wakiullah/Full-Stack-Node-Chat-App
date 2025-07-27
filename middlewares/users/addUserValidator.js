const { check } = require("express-validator");
const People = require("../../models/people");
const createError = require('http-errors')

const addUserValidator = [check('name').isLength({ min: 1 }).withMessage('Name is required').isAlpha('en-US', { ignore: ' -' }).withMessage('Enter name with only alpha').trim(),
check('email').isEmail().withMessage('Please Enter a valid email address!').trim().custom(async (value) => {
    try {
        const data = await People.findOne({ email: value })
        if (data) {
            throw createError('User Already Exist')
        }
    } catch (error) {
        throw createError(error.message)
    }
})
]

module.exports = {
    addUserValidator
};
