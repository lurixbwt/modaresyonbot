const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  // !cezalı @etiket
  let LoZUye = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!LoZUye) return message.reply(`Cezalıya atılacak üyeyi belirtmelisin!`);
  let cezaliRolu = "706901136807952485"; // CEZALI ROLÜNÜN ID
  const sebeb = args.slice(1).join('')
  
    LoZUye.addRole(cezaliRolu);
    db.push(`ceza.${message.guild.id}`, `a${LoZUye.id}`);
    message.channel.send(`${LoZUye} Adlı üye başarıyla cezalıya atıldı!`).then(m => m.delete(5000));
    
    const logg = new Discord.RichEmbed()
    .setDscription(`
    Cezalıya Atılan Üye: ${LoZUye}
    Cezalıya Atan Yetkili: <@${message.author.id}>
    Cezalıya Atılma Sebebi: ${sebeb}`);
  
    let onay = message.guild.channels.find(`name`, "log")
    onay.send(logg.id)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'jail', 
  description: 'Cezalıya atar çıkarır.',
  usage: 'jail',
  kategori: 'kullanıcı'
};