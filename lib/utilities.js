// Native
const path = require('path');

const utilities = {
	getFileExtension: filename => path.parse(filename).ext,
	handleError: (raiser, error) => console.error(`${raiser} -> ${error}`),
};

module.exports = utilities;
