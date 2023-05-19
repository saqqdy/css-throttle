import { sep } from 'node:path'
import type { RollupOptions } from 'rollup'
import terser from '@rollup/plugin-terser'
import filesize from 'rollup-plugin-filesize'
import pkg from '../package.json' assert { type: 'json' }
import { banner, extensions, reporter } from './config'

const iifeGlobals = {}

const options: RollupOptions = {
	plugins: [filesize({ reporter })]
}

function externalCjsEsm(id: string) {
	return ['js-cool', 'tslib', 'core-js', '@babel/runtime'].some(
		k => id === k || new RegExp('^' + k + sep).test(id)
	)
}

function externalCjsEs5(id: string) {
	return ['tslib', 'core-js', '@babel/runtime'].some(
		k => id === k || new RegExp('^' + k + sep).test(id)
	)
}

function externalUmd(id: string) {
	return [].some(k => id === k || new RegExp('^' + k + sep).test(id))
}

const distDir = (path: string) =>
	process.env.BABEL_ENV === 'es5' ? path.replace('index', 'es5/index') : path

export default (process.env.BABEL_ENV !== 'es5'
	? [
			{
				input: 'src/index.ts',
				output: [
					{
						file: distDir(pkg.main),
						exports: 'auto',
						format: 'cjs'
					},
					{
						file: distDir(pkg.module),
						exports: 'auto',
						format: 'es'
					}
				],
				external: externalCjsEsm,
				...options
			}
	  ]
	: [
			{
				input: pkg.module,
				output: [
					{
						file: distDir(pkg.main),
						exports: 'auto',
						format: 'cjs'
					},
					{
						file: distDir(pkg.module),
						exports: 'auto',
						format: 'es'
					}
				],
				external: externalCjsEs5,
				...options
			}
	  ]
).concat([
	{
		// input: 'src/index.ts',
		input: distDir(pkg.module),
		output: [
			{
				file: distDir('dist/index.iife.js'),
				format: 'iife',
				name: 'cssThrottle',
				extend: true,
				globals: iifeGlobals,
				sourcemap: true,
				banner,
				plugins: []
			},
			{
				file: distDir(pkg.unpkg),
				format: 'iife',
				name: 'cssThrottle',
				extend: true,
				globals: iifeGlobals,
				sourcemap: true,
				banner,
				plugins: [terser()]
			}
		],
		external: externalUmd,
		plugins: [filesize({ reporter })]
	}
])
