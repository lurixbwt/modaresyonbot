const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args, ops) => {
    message.delete()
  const dili = args[0]
  if(!dili) return message.reply("Bir Dil Yazmalısın.")
  let dil = await db.add(`teyit.${dili}`);  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dilseç'],
};

exports.help = {
  name: 'dilseç',
  description: 'Kullanıcı İçin Lianslı Rolünü Verir.',
  usage: 'dilseç'
};