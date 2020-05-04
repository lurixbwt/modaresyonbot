const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  // !cezalı @etiket
  let uye = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!uye) return message.reply(`Cezalıya atılacak üyeyi belirtmelisin!`);
  let cezaliRolu = "706901136807952485"; // CEZALI ROLÜNÜN ID
  let uyeRolu = "705850825196568697"; // ÜYE ROLÜNUN ID

    uye.setRoles([cezaliRolu]);
    db.push(`cezalilar2.${message.guild.id}`, `a${uye.id}`);
    message.reply('Belirtilen üye başarıyla cezalıya atıldı!');

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'cezalı', 
  description: 'Cezalıya atar çıkarır.',
  usage: 'cezalı',
  kategori: 'kullanıcı'
};