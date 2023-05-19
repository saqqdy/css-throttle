import { parallel, series } from 'gulp'
import { wrapDisplayName } from './utils/gulp'
import { runSpawnSync } from './utils/exec'
import { OUTPUT_PATH } from './utils/paths'

// import { buildFile } from './tasks/buildFile'
import { buildFull } from './tasks/buildFull'
import { buildEsm } from './tasks/buildEsm'
import { buildCjs } from './tasks/buildCjs'
import buildStyle from './tasks/buildStyle'

export async function clean() {
	const dirs: string[] = [OUTPUT_PATH]
	await runSpawnSync(`rimraf ${dirs.join(' ')}`)
	await runSpawnSync(`mkdir -p ${dirs.join(' ')}`)
}

export { default as file } from './tasks/buildFile'
export { default as full } from './tasks/buildFull'
export { default as esm } from './tasks/buildEsm'
export { default as cjs } from './tasks/buildCjs'
export { default as style } from './tasks/buildStyle'
export default series(
	wrapDisplayName('clean:dist,es,lib', clean),
	// parallel(buildFile),
	parallel(buildEsm, buildCjs),
	parallel(buildFull, buildStyle)
)
