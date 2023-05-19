import chalk from 'chalk'
// import pkg from '../../package.json'

// const deps = Object.keys(pkg.dependencies || {})
// const noWlPrefixFile =
// 	/(utils|styles|style|directives|plugins|filters|images|hooks|locale|directives)/

// export function external(id) {
// 	return (
// 		/^vue/.test(id) || /^css-throttle\//.test(id)
// 		//  || deps.some(k => new RegExp('^' + k).test(id))
// 	)
// }

// export function pathRewriter(bundlePath) {
// 	return id => {
// 		if (/^css-throttle\/packages/.test(id)) {
// 			if (noWlPrefixFile.test(id)) {
// 				return id.replace('css-throttle/packages/', bundlePath)
// 			}
// 			return id.replace('css-throttle/packages/', bundlePath)
// 		}
// 		if (/^@\//.test(id)) {
// 			return id.replace(/^@/, bundlePath)
// 		}
// 	}
// }

export const reporter = (opt: any, outputOptions: any, info: any) =>
	`${chalk.cyan(
		chalk.bold(
			outputOptions.file ? `${outputOptions.file.split('src/').pop()}` : info.fileName || ''
		)
	)}: bundle size ${chalk.yellow(info.bundleSize)} -> minified ${chalk.green(
		(info.minSize && `${info.minSize}`) || ''
	)}`
