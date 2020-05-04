const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let LoZUser = message.guild.member(message.mentions.users.first());
  let cezaliRolu = "706901136807952485"; // CEZALI ROLÜNÜN ID
  let geriverilcekrol = "706916260247502938" //UYE ROLÜ
  let cezalilar = db.get(`cezalilar.${message.guild.id}`);  
  let süreç = args.slice(1).join(' ').replace('gün'.toLowerCase(), 'd').replace('saat'.toLowerCase(), 'h').replace('dakika'.toLowerCase(), 'm').replace('saniye'.toLowerCase(), 's');

  
  if (LoZUser.roles.has(cezaliRolu)) {
    let cezalilar = db.get(`cezalilar.${message.guild.id}`);
    cezalilar.filter(kisi => LoZUser.id !== kisi.slice(1));
    db.set(`cezalilar.${message.guild.id}`, cezalilar);
    LoZUser.setRoles([geriverilcekrol]);
    message.reply('Belirtilen üye başarıyla cezalıdan çıkartıldı!');
  } else {
    LoZUser.setRoles([cezaliRolu]);
    db.push(`cezalilar.${message.guild.id}`, `a${LoZUser.id}`);
    message.reply('Belirtilen üye başarıyla cezalıya atıldı!');
  };
      setTimeout(function(){
      yashinu.removeRole(rol.id);
      yashinu.addRole(kayıtsızRolü);
      message.channel.send(`**\`${yashinu.displayName}\`  adlı üyenin jail süresi sona erdiği için jaili kaldırıldı!**`).then(x => x.delete(10000))
      embed.setAuthor("Jail Sona Erdi", client.user.avatarURL)
      embed.setDescription(`**Üye:** ${yashinu} | ${yashinu.id} \n**Süre:** ${süre} \n**Yetkili:** ${message.author} | ${message.author.id}`)
    client.channels.get(logYashinu).send(embed)
    }, ms(süre));

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "jail",
  description: "Resim Attırma.",
  usage: "jail",
};