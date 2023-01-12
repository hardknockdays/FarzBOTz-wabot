import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let chat = global.db.data.chats[m.chat]
let nah = `${htki} *L I S T* ${htka}
${dmenub} aesthetic
${dmenub} ahegao
${dmenub} akira
${dmenub} akiyama
${dmenub} ana
${dmenub} anjing
${dmenub} ass
${dmenub} asuna
${dmenub} ayuzawa
${dmenub} bdsm
${dmenub} blackpink
${dmenub} blowjob
${dmenub} boneka
${dmenub} boruto
${dmenub} cecan
${dmenub} cecan2
${dmenub} cecan3
${dmenub} cecan4
${dmenub} cecan5
${dmenub} chiho
${dmenub} china
${dmenub} chitoge
${dmenub} cogan
${dmenub} cogan2
${dmenub} cosplay
${dmenub} cosplayloli
${dmenub} cosplaysagiri
${dmenub} cuckold
${dmenub} cum
${dmenub} cyberspace
${dmenub} deidara
${dmenub} doraemon
${dmenub} eba
${dmenub} elaina
${dmenub} emilia
${dmenub} ero
${dmenub} erza
${dmenub} femdom
${dmenub} foot
${dmenub} gangbang
${dmenub} gifs
${dmenub} glasses
${dmenub} gremory
${dmenub} hekel
${dmenub} hentai
${dmenub} hestia
${dmenub} hinata
${dmenub} inori
${dmenub} Islamic
${dmenub} isuzu
${dmenub} itachi
${dmenub} itori
${dmenub} jahy
${dmenub} jeni
${dmenub} jiso
${dmenub} justina
${dmenub} kaga
${dmenub} kagura
${dmenub} kakasih
${dmenub} kaori
${dmenub} kartun
${dmenub} katakata
${dmenub} keneki
${dmenub} kotori
${dmenub} kpop
${dmenub} kucing
${dmenub} kurumi
${dmenub} lisa
${dmenub} loli
${dmenub} madara
${dmenub} manga
${dmenub} masturbation
${dmenub} megumin
${dmenub} mikasa
${dmenub} miku
${dmenub} minato
${dmenub} mobil
${dmenub} montor
${dmenub} mountain
${dmenub} naruto
${dmenub} neko
${dmenub} neko2
${dmenub} nekonime
${dmenub} nezuko
${dmenub} nsfwloli
${dmenub} onepiece
${dmenub} orgy
${dmenub} panties
${dmenub} pentol
${dmenub} pokemon
${dmenub} ppcouple
${dmenub} programing
${dmenub} profilwa
${dmenub} pubg
${dmenub} pussy
${dmenub} rize
${dmenub} rose
${dmenub} ryujin
${dmenub} sagiri
${dmenub} sakura
${dmenub} sasuke
${dmenub} satanic
${dmenub} shina
${dmenub} shinka
${dmenub} shinomiya
${dmenub} shizuka
${dmenub} shota
${dmenub} tatasurya
${dmenub} tejina
${dmenub} technology
${dmenub} tentacles
${dmenub} thighs
${dmenub} toukachan
${dmenub} tsunade
${dmenub} waifu
${dmenub} waifu2
${dmenub} wallhp
${dmenub} yotsuba
${dmenub} yuki
${dmenub} yulibocil
${dmenub} yumeko
${dmenub} yuri
${dmenub} zettai
${dmenuf}`
if (!text) throw nah
if (chat.nsfw == false) {
return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ', botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
} else if (chat.nsfw == true) {
try {
        let ani = await fetch('https://raw.githubusercontent.com/AyGemuy/RESTAPI/master/data/' + text + '.json')
        let mek = await ani.json()
        return conn.sendButtonImg(m.chat, mek.getRandom(), author, 'Nih.jpg', '🔄 Next 🔄', `/${command}`, fakes, adReply)
        } catch {
        throw eror
        }
        }
}
handler.command = handler.help = ["foto"]
handler.tags = ['anime']
export default handler