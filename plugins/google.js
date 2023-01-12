import { googleIt } from '@bochilteam/scraper'

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Input Query'
    let search = await googleIt(text)
    let msg = search.articles.map((v, index) => `*${htki} ${index} ${htka}*\n*${v.title}*\n*${v.url}*\n${v.description}`).join('\n\n')
    if (!msg.length) throw 'Not Found :/'
    m.reply(msg)
}
handler.help = ['google']
handler.tags = ['internet']
handler.command = /^g(oogle?|ugel)$/i

export default handler

