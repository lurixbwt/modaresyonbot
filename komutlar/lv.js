exports.run = async (client, message) => {
  if (message.author.id != "420691365777899530") return message.reply('Bunu Yapmak İçin Bir LozBey Olmalısın Gardaş.');
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