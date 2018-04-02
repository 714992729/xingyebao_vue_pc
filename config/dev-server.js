const Path = require('path')
const Express = require('express')
const Webpack = require('webpack')
const Compiler = Webpack(require('./webpack.dev.conf.js'))
const WebpackHotMiddleware = require('webpack-hot-middleware')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const opn = require('opn');

const App = Express();
App.use(require('connect-history-api-fallback')())
    .use(WebpackDevMiddleware(Compiler,{
        lazy:false,
        watchOptions:{
            aggregateTimeout:300,
            ignored:/node_module/,
            poll:false
        }
    }))
    .use(WebpackHotMiddleware(Compiler))
App.listen(8080,err => {
    if(err){
        throw new Error(err);
    }
    opn('http://localhost:8080/');
})
