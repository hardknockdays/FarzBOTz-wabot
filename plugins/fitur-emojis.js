// ESM
import { Emojis } from 'dhn-api'
let handler = async (m, { conn, args, text, usedPrefix, command, isPrems }) => {
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
          if (!args[0] || args[0].length > 2) throw 'Masukkan emoji tapi 1 aja ya :v'
          let cari = await Emojis(args[0])
    let listSections = []
	Object.values(cari.vendor_pack).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + cari.unicode_desc, [
          [v.vendor_version, usedPrefix + 'fetchsticker ' + v.vendor_thumb.slice(86) + ' wsf', 'Url: ' + v.vendor_url]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Emojis 🔎 ' + htka, `${cari.unicode_desc}`, author, '☂️ Emojis Disini ☂️', listSections, m)
}
handler.help = ['emoji']
handler.tags = ['sticker'] 
handler.command = /^(emo(jis|(ji)?)|se?moji)$/i
export default handler