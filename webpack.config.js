const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const host = 'localhost';
const port = 8080;

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        context: path.resolve(__dirname, 'src'),
        target: 'web',
        entry: {
            app: ['./index.tsx']
        },
        output: {
            filename: isProduction ? '[name]-[contenthash:6].bundle.js' : '[name].bundle.js',
            path: path.join(__dirname, './build'),
            publicPath: isProduction ? '/' : `http://${host}:${port}/`,
        },
        resolve: {
            mainFields: ['browser', 'module', 'main'],
            extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.([jt])s(x?)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name]-[contenthash:6].[ext]',
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: isProduction ? '[name]-[contenthash:6].css' : '[name].css',
                chunkFilename: '[id].css'
            })
        ],
        optimization: {
            minimize: isProduction, 
            minimizer: [
                new TerserPlugin(), 
                
            ],
            splitChunks: {
                chunks: 'all',
            }
        },
        devServer: {
            port,
            host,
            static: path.resolve(__dirname, 'src'),
        },
    };
};
