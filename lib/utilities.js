// Native
const path = require('path');

const utilities = {
	toolDirectory: path.join(__dirname, '../bin/', 'wasm'),

	getFileExtension: filename => path.parse(filename).ext,

	createFlagsForTool: flags => flags.map(flag => `-${flag}`),
	splitFlagAndValue: flags => [].concat(...flags.map(flag => flag.split(' '))),
};

module.exports = utilities;
