// Native
const fs = require('fs');

// Arguments
const {
	input,
	output,
	shaderType,
	shaderVersion,
} = require('./argsHandler');

// Constants
const {
	supportedInputTypes,
} = require('./constants');

// Utilities
const {
	getFileExtension,
} = require('./utilities');

// Optimizer
const optimizer = require('./wasm');

const optimize = () => {
	const inputFileExtension = getFileExtension(input);

	if (supportedInputTypes.includes(inputFileExtension)) {
		// Read shader
		const inputSource = fs.readFileSync(input, 'utf8');

		// Run optimizer
		const optimizedSourceCode = optimizer(inputSource, shaderVersion, ((shaderType === 'vertex') ? 1 : 0));

		// Write shader
		fs.writeFile(output, optimizedSourceCode, (error) => {
			if (error) {
				console.error(error);
			}
		});
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported file extensions are: [${supportedInputTypes}]`);
	}
};

optimize();
