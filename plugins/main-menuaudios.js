import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, isPrems }) => {
  try {
    await m.react('👑');

    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    const pp = 'https://ibb.co/Y73rRC0X';
    const img = await (await fetch(pp)).buffer()
    const shadow = `${date}`;
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const txt = `${await conn.getName(m.sender)}, Welcome to my developer menu, follow me on Instagram, thank you very much.`;

    const text = `
 ꡴ㅤ   ︵ᤢ⏜   ᷃ᩚ   ☕᪶     ᷃ᩚ ⏜ᤢ︵    ㅤ᪬
  *Hola*  ׅ ෫ׄ᷼͝${taguser}  ಒ
 ‎ ‎ ‎ ‎౨ৎ  ‎ ‎ ‎ ‎*Bienvenido* ‎ ‎  ‎ ‎✿̮    ׅ  al   ୂ  
 ⿻    *𝖬𝖾𝗇𝗎*    ෨    *𝖮𝗐𝗇𝖾𝗋*    𑇙ᰍ

*🌴 Nombre:* KILL BOT
*☕ Creador:* MvrcoSex
*📚 Librería:* Baileys
*⏰ Uptime:* ${uptime}
*🚀 Type:* NodeJs
*🧇 Usuarios regs:* ${rtotalreg}
*🥞 Usuarios totales:* ${totalreg}
${readMore}
෨   \`Lista de Comandos\`    𓈒𓏸    ☁︎ 
𑂯 ׁ${xowner} ${usedPrefix}update
𑂯 ׁ${xowner} ${usedPrefix}leavegc
𑂯 ׁ${xowner} ${usedPrefix}blocklist
𑂯 ׁ${xowner} ${usedPrefix}grouplist
𑂯 ׁ${xowner} ${usedPrefix}restart
𑂯 ׁ${xowner} ${usedPrefix}join
𑂯 ׁ${xowner} ${usedPrefix}chetar
𑂯 ׁ${xowner} ${usedPrefix}banchat 
𑂯 ׁ${xowner} ${usedPrefix}unbanchat
𑂯 ׁ${xowner} ${usedPrefix}banuser
𑂯 ׁ${xowner} ${usedPrefix}unbanuser
𑂯 ׁ${xowner} ${usedPrefix}dsowner
𑂯 ׁ${xowner} ${usedPrefix}autoadmin 
> ${club}
`.trim();
    /*
        conn.sendMessage(m.chat, {
          text: text,
          contextInfo: {
            mentionedJid: conn.parseMention(text),
            isForwarded: true,
            forwardingScore: 999,
            externalAdReply: {
              title: `${await conn.getName(m.sender)}, Welcome to my developer menu, follow me on Instagram, thank you very much.`,
              body: dev,
              thumbnail: await (await fetch(img)).buffer(),
              sourceUrl: insta,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: fkontak });*/

    await conn.sendLuffy(m.chat, txt, shadow, text, img, img, ig, fkontak)

  } catch (e) {
    conn.reply(m.chat, '✖️ Error en el comando. Inténtalo más tarde.', m);
  }
};

handler.command = /^(menuowner)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
