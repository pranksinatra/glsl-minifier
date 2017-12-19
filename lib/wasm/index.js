// WASM
const optimizerWasm = require('./glsl-optimizer-wasm');

// Exported functions
module.exports = optimizerWasm.cwrap('optimize_glsl', 'string', ['string', 'number', 'number']);
