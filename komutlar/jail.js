const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require('ms');

exports.run = async(client, message, args, prefix, ayar, emoji) => {
  // !sesmute @etiket 5m
  let LoZUser = message.mentions.members.first();
  let sebep = args.slice(2).join(' ');
  let logKanali = "706901358598684702"; // LOG KANALININ ID
  let cezaliRolu = "706901136807952485"; // CEZALI ROLÜNÜN ID
  let süre = args.slice(1).join(' ').replace('gün'.toLowerCase(), 'd').replace('saat'.toLowerCase(), 'h').replace('dakika'.toLowerCase(), 'm').replace('saniye'.toLowerCase(), 's');
  
  
  if (!LoZUser || !süre || !sebep) return message.reply('Doğru kullanmalısın!\n' +this.help.usage);
  LoZUser.addRole(cezaliRolu);
  message.channel.send(`${LoZUser.displayName} adlı üye ses kanalında **${süre}** kadar susturuldu!`);
  client.channels.get(logKanali).send(`${LoZUser} adlı üye ses kanalında **${süre}** kadar, **${sebep}** nedeniyle susturuldu!`);
    setTimeout(() => {
    LoZUser.removeRole(cezaliRolu);
    message.channel.send(`${LoZUser.displayName} adlı üyenin ses susturması kaldırıldı!`);
    client.channels.get(logKanali).send(`${LoZUser.displayName} adlı üyenin ses susturması kaldırıldı!`);
  }, ms(süre));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'jail', 
  description: 'Sesmute.',
  usage: 'jail @üye süre sebep',
  kategori: 'kullanıcı'
};