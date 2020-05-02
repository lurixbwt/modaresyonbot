const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  message.delete();
    const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
Müziği Başlat 1
Müziği Durdur 2
Müziği Başlat 1

`,true)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0,
  kategori: "üye"
};

exports.help = {
  name: "yardım",
  description: "Yardım MENÜSÜ Açılır.",
  usage: "yardım"
};