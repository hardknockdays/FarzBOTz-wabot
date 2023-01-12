import cp from 'child_process'
import { spawn } from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)

function start(cmd) {
	return spawn(cmd, [], {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
}

start('clear')
start('bash')
console.log('terminal ready to use!')
