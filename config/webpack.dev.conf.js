const Path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const Webpack = require("webpack")

const entry = {
    app:[
        'webpack-hot-middleware/client.js',
        Path.resolve(__dirname,'../src/main.js')
    ]
}
const output = {
    path:Path.resolve(__dirname,'../dist/'),
    filename:"[name].js"
}
const rules = [
    {
        test:/\.js$/,
        use:"babel-loader"
    },{
        test:/\.vue$/,
        loader:"vue-loader",
        options:{
            loaders:{
                css:ExtractTextWebpackPlugin.extract({
                    fallback:"vue-style-loader",
                    use:["css-loader","postcss-loader"]
                }),
                scss:ExtractTextWebpackPlugin.extract({
                    fallback:"vue-style-loader",
                    use:["css-loader","postcss-loader","sass-loader"]
                })
            }
        }
    },{
        test:/\.(png|jpe?g|svg)$/,
        use:"url-loader"
    },{
        test:/\.(ttf|woff|woff2)$/,
        use:"url-loader"
    },{
        test:/\.css$/,
        use:ExtractTextWebpackPlugin.extract({
            fallback:"vue-style-loader",
            use:["css-loader","postcss-loader"]
        })
    }
]
const resolve = {
    extensions:[".js",".vue",".scss"],
    alias:{
        'Style':Path.resolve(__dirname,"../src/style"),
        'Pages':Path.resolve(__dirname,"../src/pages/"),
        'Components':Path.resolve(__dirname,"../src/components/"),
        'vue$':'vue/dist/vue.common.js'
    }
}
const plugins = [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template:"template.html",
        filename:"index.html"
    }),
    new ExtractTextWebpackPlugin("style.css")
]

module.exports = {
    mode:"development",
    entry:entry,
    output:output,
    resolve:resolve,
    plugins:plugins,
    module:{
        rules:rules
    }
}