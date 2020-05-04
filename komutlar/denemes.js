const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message) => {
    message.delete()
  let kod = "```";
  let kisi = ["3"];
  let kisis = ["3"];
  let Kullanıcı = ["3"];
  let Banlanan = ["3"];
      const deneme = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
${Banlanan}: ${kisi}
${Kullanıcı}: ${kisis}
`)
  message.channel.send(`denemee`);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'deneme',
  description: 'Emoji Paylaşır.',
  usage: 'deneme'
};