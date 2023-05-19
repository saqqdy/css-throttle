import { join } from 'path'
import { parallel, series } from 'gulp'
import { wrapDisplayName } from '../utils/gulp'
import { runSpawnSync } from '../utils/exec'
import { OUTPUT_PATH, ROOT_PATH } from '../utils/paths'

export async function buildCjs() {
	await runSpawnSync(`npx tsc -b --force ${join(ROOT_PATH, 'tsconfig.cjs.json')}`)
}

export async function cleanCjs() {
	const dirs: string[] = [OUTPUT_PATH]
	await runSpawnSync(`rimraf ${dirs.join(' ')}`)
	await runSpawnSync(`mkdir -p ${dirs.join(' ')}`)
}

export default series(
	wrapDisplayName('clean:cjs', cleanCjs),
	parallel(wrapDisplayName('build:cjs:bundle', buildCjs))
)
