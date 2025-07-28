const { check, validationResult } = require("express-validator");
const People = require("../../models/people");
const createError = require('http-errors');
const { unlink } = require('fs');
const path = require("path");
const addUserValidator = [
    check('name')
        .isLength({ min: 1 })
        .withMessage('Name is required')
        .isAlpha('en-US', { ignore: ' -' })
        .withMessage('Enter name with only alpha')
        .trim(),
    check('email')
        .isEmail()
        .withMessage('Please Enter a valid email address!')
        .trim()
        .custom(async (value) => {
            try {
                const data = await People.findOne({ email: value })
                if (data) {
                    throw createError('User Already Exist')
                }
            } catch (error) {
                throw createError(error.message)
            }
        }),
    check('mobile')
        .isMobilePhone('bn-BD')
        .withMessage('Must use Bangladeshi Mobile Number')
        .custom(async (data) => {
            try {
                const isdata = await People.findOne({ mobile: data })
                if (isdata) {
                    throw createError('User Already Exist')
                }
            } catch (error) {
                throw createError(error.message)
            }
        }),
    check('password')
        .isStrongPassword()
        .withMessage("Enter a Strong Password")
]

function addUserValidatorHandler(req, res, next) {
    const validate = validationResult(req)
    const mappedError = validate.mapped()
    if (Object.keys(mappedError).length === 0) {
        next()
    } else {
        if (req.files.length > 0) {
            const fileName = req.files[0]
            unlink(
                path.join(`${__dirname}`, `/../public/uploads/avatars/${fileName}`, (err) => {
                    if (err) console.log(err);

                })
            )
        }

        res.status(500).json({
            errors: mappedError
        })
    }
}


module.exports = {
    addUserValidator,
    addUserValidatorHandler
};
