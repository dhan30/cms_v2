const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

var PORT = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log('listening at http://localhost:8000/');
});
