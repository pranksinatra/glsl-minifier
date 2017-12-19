// Native
const os = require('os');
const path = require('path');

const utilities = {
	toolDirectory: path.join(__dirname, '../bin/', os.platform()),

	getFilePath: filename => filename.substring(0, filename.lastIndexOf('/') + 1),
	getFilename: filename => path.parse(filename).name,
	getFileExtension: filename => path.parse(filename).ext,

	createFlagsForTool: flags => flags.map(flag => `-${flag}`),
	splitFlagAndValue: flags => [].concat(...flags.map(flag => flag.split(' '))),
};

module.exports = utilities;
