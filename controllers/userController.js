const User = require('../models/people')
const bcrypt = require('bcrypt')
function usersController(req, res, next) {
    res.render('users')
}


async function addNewUser(req, res, next) {
    let newUser;
    const encryptPassword = await bcrypt.hash(req.body.password, 10)
    if (req.files && req.files.length > 0) {
        newUser = new User({
            ...req.body,
            avatar: req.files[0].filename,
            password: encryptPassword
        })
    } else {
        newUser = new User({
            ...req.body,
            password: encryptPassword
        })
    }
    try {
        const savaData = await newUser.save()
        res.status(200).json({
            message: "User Create Sucessful!"
        })
    } catch (error) {
        res.status(500).json({
            errors: {
                common: {
                    msg: "unknowned Error Found!"
                }
            }
        })
    }

}

module.exports = { usersController, addNewUser }