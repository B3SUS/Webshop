const path = require('path');

module.exports = {
    entry: './src/index.js', // Путь к вашему главному файлу приложения
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // Путь для сохранения собранного бандла
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
};
