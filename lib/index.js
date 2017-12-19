// Native
const fs = require('fs');

// Arguments
const {
	input,
	output,
	shaderType,
	shaderVersion,
} = require('./argsHandler');

// Optimizer
const optimizer = require('./wasm');

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
