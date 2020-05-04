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
    
  const sbb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Kullanıcı Ceza Aldı!")
  .addField(`Cezalıya Atılan Üye`, `${LoZUye}`)
  .addField(`Cezalıya Atan Yetkili:`, `${message.author}`)
  .addField(`Cezalıya Atılma Sebebi:`, `${sebeb}`)
  .setTimestamp()
  
    let onay = message.guild.channels.find(`name`, "log")
    message.guild.channels.get(onay.id).send(sbb)

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'jail', 
  description: 'Cezalıya atar.',
  usage: 'jail',
  kategori: 'kullanıcı'
};