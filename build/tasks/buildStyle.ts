import { resolve } from 'path'
import { dest, series, src, task } from 'gulp'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import { OUTPUT_PATH, SOURCE_PATH } from '../utils/paths'

export const compileLess = task('compileLess', () =>
	src(resolve(SOURCE_PATH, '*.less'))
		.pipe(less())
		.pipe(
			autoprefixer({
				cascade: true
			})
		)
		.pipe(dest(OUTPUT_PATH))
)

export default series('compileLess')
