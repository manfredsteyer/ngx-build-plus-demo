const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.BannerPlugin('----- Manfred was here -----')
    ]
}