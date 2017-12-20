// Native
const fs = require('fs');

// Vendor
const tokenizer = require('glsl-tokenizer');
const parser = require('glsl-parser');
const minify = require('glsl-min-stream');
const deparser = require('glsl-deparser');

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

		// Assume vertex shader if input file extension has `.vert` or if `vertex` is explicity passed
		const isVertexShader = (shaderType === 'vertex' || inputFileExtension === '.vert') ? 1 : 0;

		// Run optimizer
		const optimizedSourceCode = optimizer(inputSource, shaderVersion, isVertexShader);

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
