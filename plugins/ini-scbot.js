import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let str = `${htjava}\n${dmenub} ${conn.user.name} Source Code:\n${dmenub} ${sgh}\n${dmenuf}`
await conn.sendPayment(m.chat, fsizedoc, 'USD', str, m.sender, logo, m)
}
handler.command = /^sc(ript(bot)?|bot)?$/i
export default handler
