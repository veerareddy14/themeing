const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
	// Set offline to `false`
	const config = await createExpoWebpackConfigAsync(
		{ ...env, offline: false },
		argv
	);
	return config;
};
