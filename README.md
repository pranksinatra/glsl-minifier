# GLSL optimizer

[![dependencies](https://david-dm.org/timvanscherpenzeel/glsl-optimizer.svg)](https://david-dm.org/timvanscherpenzeel/glsl-optimizer)
[![devDependencies](https://david-dm.org/timvanscherpenzeel/glsl-optimizer/dev-status.svg)](https://david-dm.org/timvanscherpenzeel/glsl-optimizer#info=devDependencies)

CLI tool for optimizing GLSL.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

	npm install

## Example

```sh
$ node ./bin/glsl-optimizer.js -i ./example/example.frag -o ./example/example.min.frag
```

```sh
$ node ./bin/glsl-optimizer.js -i ./example/example.vert -o ./example/example.min.vert
```

## Flags

### Default
	-v, --version [print version number]
	-h, --help [print help]

### Required
	-i, --input [example: ./example/example.vert] [required]
	-o, --output [example: ./example/example.min.vert] [required]

### Optional
	-sT, --shaderType [vertex / fragment, default: fragment] (vertex shader / fragment shader) [not required]
	-sV, --shaderVersion [2 / 3, default: 2] (OpenGL ES 2.0 / OpenGL ES 3.0) [not required]

## Licence

My work is released under [GNU General Public License v3.0](https://raw.githubusercontent.com/TimvanScherpenzeel/glsl-optimizer/master/LICENSE).

This repository distributes the compiled WASM binary from Joshua Koo's Emscripten port [zz85/glsl-optimizer](https://github.com/zz85/glsl-optimizer) of the original [aras-p/glsl-optimizer](https://github.com/aras-p/glsl-optimizer) source. This in itself is based on the GLSL optimizer of [Mesa](https://cgit.freedesktop.org/mesa/mesa/log/).
