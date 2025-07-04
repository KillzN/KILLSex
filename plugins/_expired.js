export async function all(m) {
    if (!m.isGroup) return;

    let chats = global.db.data.chats[m.chat];
    if (!chats.expired) return true;

    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `*🔒 Acceso al Bot Expirado*

El periodo de uso del bot ha llegado a su fin. Para reactivarlo y seguir disfrutando de todas sus funciones, contacta directamente con mi creador:
📩 https://wa.me/56983073328

También puedes unirte al grupo oficial para seguir utilizándolo sin restricciones:
🌐 https://chat.whatsapp.com/HqhAoXS8TCcJIn0KrbJZKz

Gracias por utilizar nuestros servicios. ¡Esperamos verte de vuelta pronto!`);

        await this.groupLeave(m.chat);
        chats.expired = null;
    }
}
