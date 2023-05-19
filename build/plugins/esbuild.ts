import esbuild, { type Options } from 'rollup-plugin-esbuild'
import type { Plugin } from 'rollup'

export default (options: Options = {}): Plugin =>
	esbuild({
		exclude: [],
		minify: options.minify || false,
		sourceMap: options.minify || false,
		target: 'es2017',
		loaders: {
			'.vue': 'ts'
		},
		define: {
			'process.env.NODE_ENV': JSON.stringify('production')
		},
		...options
	})
