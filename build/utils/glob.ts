import { resolve } from 'path'
import glob, { type Options } from 'fast-glob'
import { SOURCE_PATH } from './paths'

export function getPaths<T extends Options>(source: string | string[] = '*', options: T) {
	const { cwd = SOURCE_PATH } = options
	const files = glob.sync(source, {
		cwd,
		onlyDirectories: false,
		...options
	})
	return files.map(name => ({
		path: resolve(cwd, name),
		name
	}))
}
