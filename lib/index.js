// Native
const fs = require('fs');

// Vendor
const deparser = require('glsl-deparser');
const minify = require('glsl-min-stream');
const parser = require('glsl-parser');
const tokenizer = require('glsl-tokenizer/stream');
const stringToStream = require('string-to-stream');

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

		// Error check the output from GLSL optimizer
		if (optimizedSourceCode.includes('Error:')) {
			console.error(optimizedSourceCode);
			console.error('Exiting glsl-minifier!');
			process.exit(-1);
		}

		// Create write stream for the output file
		const outputFile = fs.createWriteStream(output);

		// Run file through a validator, minifier and whitespace trimmer
		stringToStream(optimizedSourceCode)
			.pipe(tokenizer())
			.pipe(parser())
			.pipe(minify())
			.pipe(deparser(false))
			.on('error', error => console.error(error))
			.pipe(outputFile);

	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported file extensions are: [${supportedInputTypes}]`);
	}
};

optimize();
