const MessageAttachment = require('discord.js');
exports.run = async (client, message) => {
        const resimler = ["https://i.pinimg.com/originals/e2/9a/28/e29a28e9c7f1b1fb28c8aadb921cd3e9.gif", "https://i.imgyukle.com/2018/05/14/n5ZIh.gif", "https://i.gifer.com/Tm0H.gif"]
        const resim = resimler[Math.floor(Math.random()*resimler.length)];
        message.channel.send(`<@${message.author.id}> Adlı Üye Avatar İstedi.`, {
          file: `${resim}`
        });
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "avatar",
  description: "Resim Attırma.",
  usage: "avatar",
};