const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: ['./src/main/content/jcr_root/apps/spa-vue/clientlibs/clientlib-site/js/script.js'] // initial script, entry point, starts out app
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './target/classes/apps/spa-vue/clientlibs/clientlib-site/js') // destination path
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js' // to use vue with compiler
        }
    },
    devtool: 'inline-source-map'
};