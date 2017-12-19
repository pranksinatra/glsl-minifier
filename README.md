# GLSL optimizer

[![dependencies](https://david-dm.org/timvanscherpenzeel/glsl-optimizer.svg)](https://david-dm.org/timvanscherpenzeel/glsl-optimizer)
[![devDependencies](https://david-dm.org/timvanscherpenzeel/glsl-optimizer/dev-status.svg)](https://david-dm.org/timvanscherpenzeel/glsl-optimizer#info=devDependencies)

CLI tool for optimizing GLSL.

## Installation

```sh
$ npm install -g --save glsl-optimizer
```

## Example

```sh
$ node ./bin/glsl-optimizer -i ./example/example.vert -o ./example/example.min.vert
```

## Flags

### Required
	-i, --input [example: ./example/example.vert] [required]
	-o, --output [example: ./example/example.min.vert] [required]

### Tool flags
	-f, --flags ["flag value" "flag value"] [not required]

## Licence

My work is released under [GNU General Public License v3.0](https://raw.githubusercontent.com/TimvanScherpenzeel/glsl-optimizer/master/LICENSE).