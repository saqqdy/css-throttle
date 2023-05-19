import type { ModuleFormat } from 'rollup'
import { OUTPUT_PATH } from './utils/paths'

export interface BuildConfig {
	format: ModuleFormat
	name?: string
	output: {
		name: string
		path: string
	}
	globals?: Record<string, string>
	bundlePath: string
}

export const buildConfig: BuildConfig[] = [
	{
		format: 'esm',
		output: {
			name: 'es',
			path: OUTPUT_PATH
		},
		bundlePath: 'css-throttle/es'
	},
	{
		format: 'cjs',
		output: {
			name: 'lib',
			path: OUTPUT_PATH
		},
		bundlePath: 'css-throttle/lib'
	}
]

export const bundleConfig: BuildConfig[] = [
	{
		name: 'cssThrottle',
		format: 'es',
		output: {
			name: 'dist',
			path: OUTPUT_PATH
		},
		globals: {
			vue: 'Vue',
			'css-throttle': 'cssThrottle'
		},
		bundlePath: 'css-throttle/dist'
	},
	{
		name: 'cssThrottle',
		format: 'umd',
		output: {
			name: 'dist',
			path: OUTPUT_PATH
		},
		globals: {
			vue: 'Vue',
			'css-throttle': 'cssThrottle'
		},
		bundlePath: 'css-throttle/dist'
	}
]
