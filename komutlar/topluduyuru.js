const Discord = require('discord.js');
const ayarlar = require('../tokenler/token.json');

exports.run = (client, message, args) => {
if (message.author.id !=420691365777899530 ) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
message.react("‍")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dmduyuru","botduyuru"],
  permLevel: 4
};

exports.help = {
  name: 'dmduyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};