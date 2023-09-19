import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
HALO WELCOME TO BAGAS OFC BOT ENJOY YOUR PLAYING
   

 • sᴛᴀᴛᴜs : ᴘᴜʙʟɪᴄ
 • ʟᴀɴɢᴜᴀɢᴇ : ɴᴏᴅᴇᴊs
 • ʙᴀɪʟᴇʏ : @ᴀᴅɪᴡᴀsʜɪɴɢ
 • ʙᴀɪʟᴇʏ sᴜᴘᴘ : @ᴡʜɪsᴋᴇʏsᴏᴄᴋᴇᴛs

ᴋᴇᴛɪᴋ *.ᴀʟʟᴍᴇɴᴜ*
ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ

-COLABORATION BAGAS.OFC AND DARWIN.OFC-
`;
 let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}

conn.sendMessage(m.chat, {
    video: fs.readFileSync('./media/menu.mp4'),
    mimetype: 'video/mp4',
    fileLength: 100000000000,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 5,
    contextInfo: {
      forwardingScore: 2023, 
      isForwarded: false,
      mentionedJid: [m.sender]
    }
  },
  )
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m });
/*
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `BAGAS.OFC 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ʟʟᴄ`,
      body: global.author,
      thumbnailUrl: ``,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})*/
}
handler.command = /^(menu|help)$/i;

export default handler;