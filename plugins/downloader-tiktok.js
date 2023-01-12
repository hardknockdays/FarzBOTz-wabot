import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!text.includes('tiktok')) throw 'Masukkan Link'
    let cer = await ngetiktok(text)
	let cap = `*「 T I K T O K 」*
*📛Author:* ${cer.author}
*📒Title:* ${cer.desc}

`.trim()
conn.send2ButtonVid(m.chat, cer.watermark, cap, author, 'No Wm', `.get ${cer.nowm}`, 'Audio', `.get ${cer.audio}`, m, adReply)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok)$/i

export default handler

async function ngetiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });
  
   let desc = response.data.desc
   let author = response.data.author
   let nowm = (response.data.links[0].a || "").replace("https", "http")
   let watermark = (response.data.links[1].a || "").replace("https", "http")
   let audio = (response.data.links[2].a || "").replace("https", "http")
   let thumbnail = response.data.cover
  return { desc, author, nowm, watermark, audio, thumbnail }
}