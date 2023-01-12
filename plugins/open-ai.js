import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(_exec).bind(cp)

let handler = async (m, { conn, isOwner, command, text }) => {
if (!text) throw "input text"
if (command == 'aicute') {
  if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/cute-creature-generator')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output_url, [['Ping', '.ping']], m)
  }
  }
  
  if (command == 'aianime') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/anime-portrait-generator')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output_url, [['Ping', '.ping']], m)
  }
  	}
  
  if (command == 'aitextimg') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/text2img')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output_url, [['Ping', '.ping']], m)
  }
  	}
  
  if (command == 'aitextgen') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/text-generator')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, str.output, logo, [['Ping', '.ping']], m)
  }
  	}
  
  if (command == 'aidiff') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/stable-diffusion')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output_url, [['Ping', '.ping']], m)
  }
  	}
  
  if (command == 'aisent') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/sentiment-analysis')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output, [['Ping', '.ping']], m)
  }
  	}
  
  if (command == 'ai3d') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/3d-character-generator')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output_url, [['Ping', '.ping']], m)
  }
  	}
  
  if (command == 'aipunk') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/steampunk-generator')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output_url, [['Ping', '.ping']], m)
  }
  	}
  
  if (command == 'aiworld') {
  	if (global.conn.user.jid != conn.user.jid) return
  m.reply('Waiting...')
  let o
  try {
    o = await exec('curl \ -F text=' + text.trimEnd() + '\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/anime-world-generator')
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    let str = JSON.parse(stdout)
    await conn.sendButton(m.chat, '*ID:* ' + str.id, wm, str.output_url, [['Ping', '.ping']], m)
  }
  	}
  
  
    }
handler.help = ['ai']
handler.tags = ['info']
handler.command = /^ai(text(gen|img)|cute|anime|diff|sent|3d|punk|world)$/i
export default handler