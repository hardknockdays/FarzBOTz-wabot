import { dafontSearch, dafontDown } from '../lib/dafont.js'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Harap Masukan Query'
  if (command == 'dafonts') {
  try {
    let res = await dafontSearch(text)
	let row = Object.values(res).map((v, index) => ({
		title: v.judul,
		description: '\nâ style: ' + v.style + '\nâ˛ď¸ total: ' + v.total + '\nđ link: ' + v.link,
		rowId: usedPrefix + 'dafontsdown ' + v.link
	}))
	let button = {
		buttonText: `âď¸ ${command} Search Disini âď¸`,
		description: `âĄ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	} catch (e) { throw eror }
}

if (command == 'dafontsdown') {
try {
let res = await dafontDown(text)
let row = Object.values(res).map((v, index) => ({
		title: v.judul,
		description: '\nâ style: ' + v.style + '\nâ˛ď¸ isi: ' + v.isi + '\nâ˛ď¸ output: ' + v.output + '\nđ down: ' + v.down,
		rowId: usedPrefix + 'get ' + v.down
	}))
	let button = {
		buttonText: `âď¸ ${command} Search Disini âď¸`,
		description: `âĄ Silakan pilih apkpure ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	} catch (e) { throw eror }
}

}
handler.tags = ['tools']
handler.command = ['dafonts', 'dafontsdown']
handler.owner = false

handler.exp = 0
handler.limit = true

export default handler