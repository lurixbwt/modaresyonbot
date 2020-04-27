exports.run = async (client, message) => {
        message.delete()
    if (!message.member.roles.find("name", "👑")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`👑*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }  
  if(message.author.bot || message.channel.type === "dm") return;
    if (!message.member.voiceChannel) { return message.channel.send("Zaten Kanalda değilim?"); }
  
    message.member.voiceChannel.leave();
    return message.channel.send(`Kanaldan Ayrıldım`);
  };
  
  exports.conf = {
    enabled: true,

    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: "lv",
    description: "Bulunduğu odadan gider.",
    usage: "çık",

  };