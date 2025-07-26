const createError = require('http-errors')

function NotFoundError(req, res, next) {
    next(createError(404, 'Page Not Found'))
}

function ErrorHandler(err, req, res, next) {
    res.render('error', {
        title: "Error Page"
    })
}

module.exports = {
    notFoundError: NotFoundError,
    errorHandler: ErrorHandler
}