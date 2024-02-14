module.exports = {
    module: {
        rules: [
            {
                test: /\.xlsx$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/excel/", // Specify the output path
                        },
                    },
                    {
                        loader: "raw-loader",
                    },
                ],
            },
        ],
    },
};
