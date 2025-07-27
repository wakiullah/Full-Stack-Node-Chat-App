const uploader = require("../../utils/singleUpload");

function avatarUpload() {

    const upload = uploader("avatars",
        ["image/jpeg", "image/jpg", "image/png"],
        1000000,
        "Only .jpg, jpeg or .png format allowed!"
    )



}

module.exports = avatarUpload