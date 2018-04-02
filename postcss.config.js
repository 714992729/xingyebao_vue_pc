var cfg = require("./config/config.js");
module.exports = {
    plugins:[
        require('autoprefixer')({
            browsers:cfg.browserlist
        })
    ]
}