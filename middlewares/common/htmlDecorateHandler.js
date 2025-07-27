function htmlDecorationHandler(page_title) {

    return function (req, res, next) {
        console.log('cont' + page_title);
        res.locals.html = true;
        res.locals.title = `${page_title} -${process.env.APP_NAME}`
        next()
    }
}

module.exports = htmlDecorationHandler