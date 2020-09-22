const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');
const { merge } = require('webpack-merge');

// 플러그인 추가
const addons = (addonsArg) => {
    let addons = [...[addonsArg]].filter(Boolean);

    return addons.map(addonsName => require(`./build-utils/addons/webpack.${addonsName}.js`));
};

module.exports = (env) => {
    if(!env) {
        throw new Error(buildValidations.ERR_NO_ENV);
    }
    
    const envConfig = require(`./build-utils/webpack.${env.env}.js`);
    const mergedConfig = merge(
        commonConfig,
        envConfig,
        ...addons(env.addons)
    );

    return mergedConfig;
}