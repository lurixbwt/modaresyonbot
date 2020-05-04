const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const ms = require('ms');

exports.run = async(client, message, args) => {
  // !cezalı @etiket
    if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }
  let LoZUye = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!LoZUye) return message.reply(`Cezalıya atılacak üyeyi belirtmelisin!`);
  let cezaliRolu = ""; // CEZALI ROLÜNÜN ID
  const sure = args.slice(1).join('')
  const sebeb = args.slice(2).join('')
  
  setTimeout(function(){
    LoZUye.addRole(cezaliRolu);
    db.push(`ceza.${message.guild.id}`, `a${LoZUye.id}`);
    message.channel.send(`${LoZUye} Adlı üye başarıyla cezalıya atıldı!`).then(m => m.delete(5000));
      message.guild.channels.get(onay.id).send(log)
  }, ms(sure));
  
  const log = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Kullanıcı Ceza Aldı!")
  .addField(`Cezalıya Atılan Üye`, `${LoZUye}`)
  .addField(`Cezalıya Atan Yetkili:`, `${message.author}`)
  .addField(`Cezalıya Atılma Sebebi:`, `${sebeb}`)
  .setTimestamp()
  
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