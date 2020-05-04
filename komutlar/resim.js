const MessageAttachment = require('discord.js');
exports.run = async (client, message) => {
        message.channel.send(`<@${message.author.id}> Adlı Üye Selam Verdi.`, {
          file: "https://appstickers-cdn.appadvice.com/1179987344/819903460/e2acb9440bac712b13e3d3f9ad20d909-10.gif"
        });
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "sa",
  description: "Resim Attırma.",
  usage: "sa",
};