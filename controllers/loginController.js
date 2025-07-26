function loginController(req, res, next) {
console.log('loginController called');

    res.render('index', {
        title: "Login- Chat Application"
    })

}

module.exports = { loginController }