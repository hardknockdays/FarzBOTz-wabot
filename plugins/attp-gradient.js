import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let urls = ['https://violetics.pw/api/canvas/quotes?apikey=beta&text=' + teks + '&author=' + name,
'https://api.lolhuman.xyz/api/attp2?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/attp?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/hartacustom?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp2?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp3?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp4?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp5?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp6?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp?apikey=' + global.lolkey + '&text=' + teks,
'https://leyscoders-api.herokuapp.com/api/ttp1?text=' + teks + '&apikey=MIMINGANZ',
'https://leyscoders-api.herokuapp.com/api/ttp2?text=' + teks + '&apikey=MIMINGANZ',
'https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=' + teks,
'https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=' + teks,
'https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=' + teks]
            let lisn = ["Quotes: " + urls[0].substring(8, urls[0].indexOf('/api')),
            "Attp 2: " + urls[1].substring(8, urls[1].indexOf('/api')),
            "Attp: " + urls[2].substring(8, urls[2].indexOf('/api')),
            "Harta Tahta: " + urls[3].substring(8, urls[3].indexOf('/api')),
            "TTP 2: " + urls[4].substring(8, urls[4].indexOf('/api')),
            "TTP 3: " + urls[5].substring(8, urls[5].indexOf('/api')),
            "TTP 4: " + urls[6].substring(8, urls[6].indexOf('/api')),
            "TTP 5: " + urls[7].substring(8, urls[7].indexOf('/api')),
            "TTP 6: " + urls[8].substring(8, urls[8].indexOf('/api')),
            "TTP: " + urls[9].substring(8, urls[9].indexOf('/api')),
            "TTP 7: " + urls[10].substring(8, urls[10].indexOf('/api')),
            "TTP 8: " + urls[11].substring(8, urls[11].indexOf('/api')),
            "Attp Gradient 2: " + urls[12].substring(8, urls[12].indexOf('/api')),
            "Attp Gradient: " + urls[13].substring(8, urls[13].indexOf('/api')),
            "TTP Gradient: " + urls[14]].substring(8, urls[14].indexOf('/api'))
            ]
            
            let row = Object.keys(urls, lisn).map((v, index) => ({
		title: htjava + ' ' + lisn[v] + ' Sticker',
		description: 'By: ' + wm + '\n Link: ' + urls[v].substring(8, urls[v].indexOf('/api')),
		rowId: usedPrefix + 'get ' + urls[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['ttpg', 'attpg', 'attpg2', 'quotex', 'tahta', 'ttp1', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6', 'ttp7', 'ttp8', 'attp1', 'attp2', 'hartacustom'].map(v => v + ' <text>')
handler.command = /^(hartacustom|attp(g2|[12])|quotex|attpg|t(ahta|tp[1-8g]))$/i
handler.tags = ['sticker']
export default handler