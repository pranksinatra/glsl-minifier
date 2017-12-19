// Native
const pkg = require('../package.json');

// Vendor
const { ArgumentParser } = require('argparse');

const createParserArguments = () => {
	const parser = new ArgumentParser({
		version: pkg.version,
		addHelp: true,
		description: pkg.description,
	});

	// Flags to pass on to tools
	parser.addArgument(['-f', '--flags'], {
		help: 'Any flags you want to directly pass to the tool',
		nargs: '*',
	});

	// File input flag
	parser.addArgument(['-i', '--input'], {
		help: 'Input file including path',
		required: true,
	});

	// File output flag
	parser.addArgument(['-o', '--output'], {
		help: 'Output file including path',
		required: true,
	});

	const args = parser.parseArgs();

	return args;
};

const args = createParserArguments();

module.exports = args;

