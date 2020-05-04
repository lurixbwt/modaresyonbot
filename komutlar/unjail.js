const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  // !cezalı @etiket
  let LoZUye = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!LoZUye) return message.reply(`Cezalıya atılacak üyeyi belirtmelisin!`);
  let cezaliRolu = "706901136807952485"; // CEZALI ROLÜNÜN ID
  const sebeb = args.slice(1).join('')
  let cezalilar = db.get(`cezalilar2.${message.guild.id}`);
  cezalilar.filter(kisi => LoZUye.id !== kisi.slice(1));
  
    LoZUye.removeRole(cezaliRolu);
    db.set(`ceza.${message.guild.id}`, cezalilar);
    message.channel.send(`${LoZUye} Adlı üye başarıyla cezası kaldırıldı!`).then(m => m.delete(5000));
    
  const sbb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Kullanıcının Cezası Bitti!")
  .addField(`Cezası Biten Üye`, `${LoZUye}`)
  .addField(`Cezasını Bitiren Yetkili:`, `${message.author}`)
  .addField(`Cezanın Bitme Sebebi:`, `${sebeb}`)
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
  name: 'unjail', 
  description: 'Cezalıya çıkarır.',
  usage: 'unjail',
  kategori: 'kullanıcı'
};