import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'sound') {
if (!text) throw `Contoh:
${usedPrefix + command} 2

List Number
Max Angka 70

Contoh:
${usedPrefix + command} arigatou

List Alphabet
• anjay
• ara-ara
• ara-ara-cowok
• ara-ara2
• arigatou
• assalamualaikum
• asu
• ayank
• aku-ngakak
• bacot
• bahagia-aku
• baka
• bansos
• beat-box
• beat-box2
• biasalah
• bidadari
• bot
• buka-pintu
• canda-anjing
• cepetan
• cuekin-terus
• daisuki-dayo
• daisuki
• dengan-mu
• gaboleh-gitu
• gak-lucu
• gamau
• gay
• gelay
• gitar
• gomenasai
• hai-bot
• hampa
• hayo
• hp-iphone
• i-like-you
• ih-wibu
• india
• karna-lo-wibu
• kiss
• kontol
• ku-coba
• maju-wibu
• makasih
• mastah
• nande-nande
• nani
• ngadi-ngadi
• nikah 
• nuina
• onichan
• owner-sange
• ownerku
• pak-sapardi
• pale
• pantek
• pasi-pasi
• punten
• sayang
• siapa-sih
• sudah-biasa
• summertime
• tanya-bapak-lu
• to-the-bone
• wajib
• waku
• woi
• yamete
• yowaimo
• yoyowaimo
`

if (isNumber(text)) {
//VN 1
let vn
 try { vn = 'https://raw.githubusercontent.com/wudysoft/Sound/main/' + text + '.mp3' }
 catch { vn = 'https://hansxd.nasihosting.com/sound/sound' + text + '.mp3' }
await conn.sendFile(m.chat, vn, text + '.mp3', '', m, null, adReply)
} else if (!isNumber(text)) {
//VN 2
let vn = `https://raw.githubusercontent.com/AyGemuy/HAORI-API/main/audio/${text}.mp3`
await conn.sendFile(m.chat, vn, text + '.mp3', '', m, null, adReply)
} else if (e) {
throw `Error`
}
}

//VN 3
if (command == 'mangkane') {
if (!text) throw `Contoh:
${usedPrefix + command} 1`
let vn
 try { vn = 'https://raw.githubusercontent.com/wudysoft/Rest-Sound/main/HyuuraKane/mangkane' + text + '.mp3' }
 catch { vn = 'raw.githubusercontent.com/WH-MODS-BOT/Soundskane/master/mangkane' + text + '.mp3' }
 if (args[0] > 25) {
 let ya = 'https://raw.githubusercontent.com/wudysoft/mangkane/main/Mangkanenya/mangkane' + args[0] + '.mp3'
 await conn.sendFile(m.chat, ya, text + '.mp3', '', m, null, adReply)
 }
await conn.sendFile(m.chat, vn, text + '.mp3', '', m, null, adReply)
  }
  
//VN 3
if (command == 'ringtone') {
if (!text) throw `Contoh:
${usedPrefix + command} black cover`
let vn = await fetch('https://fatiharridho.herokuapp.com/api/search/ringtone?query=' + text)
let x = await vn.json()
await conn.sendFile(m.chat, x.result[0].audio, text + '.mp3', '', m, null, adReply)
}

}
handler.command = handler.help = ['sound', 'mangkane', 'ringtone']
handler.tags = ['random']

export default handler

function isNumber(x) {
    return !isNaN(x)
}

