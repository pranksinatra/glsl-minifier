// Native
const os = require('os');
const path = require('path');

const utilities = {
	toolDirectory: path.join(__dirname, '../bin/', os.platform()),

	getFileExtension: filename => path.parse(filename).ext,

	createFlagsForTool: flags => flags.map(flag => `-${flag}`),
	splitFlagAndValue: flags => [].concat(...flags.map(flag => flag.split(' '))),
};

module.exports = utilities;
