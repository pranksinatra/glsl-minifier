// Native
const path = require('path');

// Arguments
const {
	flags,
	input,
	output,
} = require('./argsHandler');

// Constants
const {
	supportedInputTypes,
	supportedOutputTypes,
} = require('./constants');

// Child process
const createProcess = require('./createProcess');

// Utilities
const {
	compressionToolDirectory,
	getFileExtension,
	createFlagsForTool,
	splitFlagAndValue,
} = require('./utilities');

const optimize = () => {
	const inputFileExtension = getFileExtension(input);
	const outputFileExtension = getFileExtension(output);

	if (!supportedOutputTypes.includes(outputFileExtension)) {
		console.error(`${outputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${supportedOutputTypes}]`);
		return;
	}

	if (supportedInputTypes.includes(inputFileExtension)) {
		// Flag mapping
		const flagMapping = [
			'-i', input,
			'-o', output,
		];

		const toolPath = path.join(compressionToolDirectory, 'wasm');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		const combinedFlags = [...flagMapping, ...toolFlags];

		createProcess(toolPath, combinedFlags);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${supportedInputTypes}]`);
	}
};

module.exports = optimize;
