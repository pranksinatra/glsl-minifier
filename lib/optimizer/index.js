// Emscripten module
const Module = require('./glsl-optimizer-wasm');

// Emscripten exported functions
module.exports = Module.cwrap('optimize_glsl', 'string', ['string', 'number', 'number']);
