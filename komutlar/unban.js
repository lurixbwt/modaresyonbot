const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Bu komutu kullanabilmek için "Üyeleri Yasakla" iznine sahip olmalısın!')
  if(!args[0]) return message.reply('Kaldırılacak banlı kullanıcının IDsini girmelisin. (Tüm banları kaldırmak için toplu yazmalısın)')
    if(args[0] === "toplu") {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu özelliği kullanabilmek için "Yönetici" iznine sahip olmalısın!')
        message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
            message.guild.unban(user)
          });
        });
        message.channel.send(`**Sunucudaki banların tümü başarıyla kaldırılıyor...**`)
      return
    }
    if(isNaN(args[0])) return message.reply('Banı kaldırılacak kullanıcının ID numarasını girmelisin!').then(x => x.delete(5000))
    try {
      message.guild.unban(args[0])
      let veriflog = message.guild.channels.find(`name`, "🔺ᴋᴀʏıᴛʟᴀʀ");
      veriflog.send(verifembed);
      client.fetchUser(args[0]).then(x => message.channel.send(new Discord.RichEmbed().setAuthor('Ban Kaldırıldı').setTimestamp().setColor("GREEN").setFooter(message.guild.name, message.guild.iconURL).setDescription(`**Banı Kaldırılan:** ${x.tag} \n**Banı Kaldıran:** ${message.author} | ${message.author.id}`)))
    } catch(err) { message.reply('Belirtilen ID numarasının banı kaldırılamadı!').then(x => x.delete(5000)) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['un-ban', 'ban-kaldır'],
  permLevel: 0,
};

exports.help = {
  name: 'unban',
  description: 'Sunucudan ban kaldırmanızı sağlar.',
  usage: 'unban id/toplu',
};
let verifembed = new Discord.RichEmbed()
        .setTitle("Teyit Çıktısı")
        .setColor('#a5f23a')
        .addField("Teyit Eden Kişi", `${message.author.tag}`, true)
        .addField("Kanal", message.channel, true)
        .addField("Teyit Olan Kişi", `${vUser}`, true)
        .addField("Teyit Cinsiyeti", "Erkek", true)
        .addField("Teyit Sayısı", `${teyitsayisi}`, true)
        .addField("THE CYPHER EMPIRE", "Gururla Sunar...!", true)
        .setTimestamp();
      let veriflog = message.guild.channels.find(`name`, "🔺ᴋᴀʏıᴛʟᴀʀ");
    if (!veriflog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen '🔺ᴋᴀʏıᴛʟᴀʀ' Adlı Kanal Oluşturunuz.`");
    veriflog.send(verifembed);