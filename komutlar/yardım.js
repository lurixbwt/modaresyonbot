const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";


  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      ` Müziği Durdurmayı Onaylıyormusunuz?`
    )
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem onaylandı! Müzik Durduruldu.`
        );

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      }
    });
  });
};

module.exports.conf = {
  aliases: ["yardım"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "yardım",
  description: "davet-sıfırla",
  usage: "yardım"
};