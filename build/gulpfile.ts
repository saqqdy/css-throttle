import { parallel, series } from 'gulp'
import { wrapDisplayName } from './utils/gulp'
import { runSpawnSync } from './utils/exec'
import { OUTPUT_PATH } from './utils/paths'

import buildStyle from './tasks/buildStyle'

export async function clean() {
	const dirs: string[] = [OUTPUT_PATH]
	// await runSpawnSync(`rm-all ${dirs.join(' ')}`)
	await runSpawnSync(`mkdir -p ${dirs.join(' ')}`)
}

export { default as style } from './tasks/buildStyle'
export default series(wrapDisplayName(`clean:${OUTPUT_PATH}`, clean), parallel(buildStyle))
