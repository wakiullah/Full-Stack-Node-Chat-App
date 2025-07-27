const multer = require('multer')
const path = require('path')

function uploader(subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg) {
    const uploadFolder = `${__dirname}/../public/uploads/${subfolder_path}/`
    const storage = multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, uploadFolder)
        },
        filename: function (req, file, cb) {
            const extName = path.extname(file.originalname)
            const newName = file.originalname.replace(extName, '').toLowerCase().split(' ').join('-')
            cb(null, newName + Date.now() + extName)
        }
    })

    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size
        },
        fileFilter: function (req, file, cb) {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(error_msg));
            }
        }
    })

    return upload

}

module.exports = uploader;