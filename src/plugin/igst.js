
import fg from 'api-dylux';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!args[0]) {
    throw `🔗 https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r  
✳️ *Enter Instagram Username*\n\n📌 *Example:* ${usedPrefix + command} Arlodragon`;
  }

  try {
    let res = await fg.igStalk(args[0]);
    let te = `
╭━━━━━━━━━━━━━━━━━━━━━━━╮
📸 *INSTAGRAM STALKER* 📸
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭────────── ⋆⋅☆⋅⋆ ──────────╮
➤ **🏷️ Name:** ${res.name}
➤ **🔖 Username:** ${res.username}
➤ **👥 Followers:** ${res.followersH}
➤ **🫂 Following:** ${res.followingH}
➤ **✍️ Bio:** ${res.description}
➤ **📷 Posts:** ${res.postsH}
➤ **🔗 Profile Link:**  
   https://instagram.com/${res.username.replace(/^@/, '')}
╰────────── ⋆⋅☆⋅⋆ ──────────╯
    `;

    await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m);
  } catch {
    m.reply(`🔗 https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r  
✳️ *Ensure the username is valid and belongs to Instagram!*`);
  }
};

handler.help = ['igstalk'];
handler.tags = ['dl'];
handler.command = ['igstalk'];

export default handler;

