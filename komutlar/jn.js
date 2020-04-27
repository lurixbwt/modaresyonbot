exports.run = async (client, message) => {
  const emoji = client.emojis.get('693972316182282271');
      message.delete()
    if (!message.member.roles.find("name", "👑")) {
        return message.channel.send(`${emoji} **Bu Komutu Kullanmak için** \*'👑*\' **Rolüne Sahip Olman Lazım** `)
            .then(m => m.delete(5000));
    }  
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("İlk önce ses kanalına giriş yapman gerekiyor!"); }

  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("Bu kanala bağlanma yetkim yok"); }
  if (permissions.has("SPEAK") === false) { return message.channel.send("Bu kanalda konuşma yetkim yok"); }

  message.member.voiceChannel.join();

};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "jn",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "join",
};