/* config-overrides.js */
const { compose } = require('react-app-rewired');
const rewireLodash = require('react-app-rewire-lodash');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");

module.exports = function(config, env){
    const rewires = compose(
        rewireLodash,
        rewireVendorSplitting
    );

    if (env === 'production') {
        config = rewireWebpackBundleAnalyzer(config, env, {
            analyzerMode: 'static',
            reportFilename: 'report.html'
        })
    }
    return rewires(config, env);
};
