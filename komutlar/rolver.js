const Discord = require('discord.js');
exports.run = (client, message, args) => {
    //let rol = message.guild.roles.find(`name`, "sᴀʀɪ");
   // let kullanıcı = message.guild.member(message.mentions.users.first());
     
//if (!kullanıcı) return message.reply("Bir kullanıcıdan bahsetmelisin.");
 //   kullanıcı.addRole(rol.id);
 // message.reply("Rol Eklendi");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};