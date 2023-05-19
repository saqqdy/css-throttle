import { join } from 'path'
import { parallel, series } from 'gulp'
import { wrapDisplayName } from '../utils/gulp'
import { runExec, runSpawnSync } from '../utils/exec'
import { ROOT_PATH } from '../utils/paths'

export async function buildFile() {
	await runExec(`sh ${join(ROOT_PATH, 'scripts', 'build-entry.sh')}`)
	await runExec(`sh ${join(ROOT_PATH, 'scripts', 'gen-types.sh')}`)
}

export async function cleanFile() {
	const dirs: string[] = [join(ROOT_PATH, 'global.d.ts')]
	await runSpawnSync(`rimraf ${dirs.join(' ')}`)
}

export default series(
	wrapDisplayName('clean:file', cleanFile),
	parallel(wrapDisplayName('build:file', buildFile))
)
