const path = require("path");
const loaders = require("./webpack/loaders");
const envConfs = {
    development: require("./webpack/development"),
    production: require("./webpack/production")
};

const {NODE_ENV} = process.env;

let configuration = {
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
        library: "leaflet-ant-path",
        libraryTarget: "umd"
    },
    devServer: {
        contentBase: "dev-env",
        inline: true,
        hot: true
    },
    module: {
        loaders
    }
};

if (!NODE_ENV) {
    throw {message: "Please define your NODE_ENV"};
}

configuration = Object.assign({}, configuration, envConfs[NODE_ENV]);
console.info(`Using ${NODE_ENV} configurations`);

module.exports = configuration;