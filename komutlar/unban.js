const Discord = require('discord.js');
const { Client, Message, RichEmbed, Guild } = require("discord.js");
var Ayarlar = {
  Bertaraf_Edilecek_Yetkiler: [
    "705110968308596809",
    "ID"
  ],
  Emojiler: [
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣"
  ]
}


exports.run = async(client, message, args) => {
    client.banBilgilendirme = {};
    client.on("messageReactionAdd", async (react, user) => {
      if (user.id == client.user.id) return;
      var keys = Object.keys(client.banBilgilendirme);
      var flag = keys.some(a => a == react.message.id);
      if (!flag) return;
      var alosha = client.banBilgilendirme[react.message.id];
      if (alosha.Cagiran_Kisi != user.id) return;
      if (react.emoji.name == "▶️") {
        alosha.Page++;
        var startPage = alosha.Page * 9 == 9 ? 0 : ((alosha.Page * 9));
        var yeniListe = alosha.Liste.slice(startPage - 9, alosha.Liste.length >= (startPage == 0 ? 9 : startPage) ? (startPage == 0 ? 9 : startPage) : alosha.Liste.length);
        var embed = new RichEmbed()
          .setTitle(alosha.Guild.name)
          .setFooter(user.username, user.avatarURL || user.defaultAvatarURL)
          .setDescription("Panel hazırlanıyor...");
        await alosha.Mesaj.edit(embed);
        alosha.Mesaj = await alosha.Mesaj.clearReactions();
        await alosha.Mesaj.react("❌");
        await alosha.Mesaj.react("◀️");
        await alosha.Mesaj.react("▶️");
        for (var x in yeniListe) {
          await alosha.Mesaj.react(Ayarlar.Emojiler[x]);
        }
        embed.setDescription("Aşağıdaki kişiler sunucudan yasaklanmıştır.");
        embed.addField("Yasaklananlar:", (yeniListe.length > 0 ? yeniListe.map(p => p.Kisi + " | " + p.Sebep) : "Herhangi bir sonuç bulunamadı."))
        embed.setFooter("Geliştirici Alosha#1089, Sayfa: " + alosha.Page)
        await alosha.Mesaj.edit(embed);
      }
      if (react.emoji.name == "◀️" && alosha.Page - 1 > 0) {
        alosha.Page--;
        var startPage = alosha.Page * 9 == 9 ? 0 : ((alosha.Page * 9));
        var yeniListe = alosha.Liste.slice(startPage - 9, alosha.Liste.length >= (startPage == 0 ? 9 : startPage) ? (startPage == 0 ? 9 : startPage) : alosha.Liste.length);
        var embed = new RichEmbed()
          .setTitle(alosha.Guild.name)
          .setFooter(user.username, user.avatarURL || user.defaultAvatarURL)
          .setDescription("Panel hazırlanıyor...");
        await alosha.Mesaj.edit(embed);
        alosha.Mesaj = await alosha.Mesaj.clearReactions();
        await alosha.Mesaj.react("❌");
        await alosha.Mesaj.react("◀️");
        await alosha.Mesaj.react("▶️");
        for (var x in yeniListe) {
          await alosha.Mesaj.react(Ayarlar.Emojiler[x]);
        }
        embed.setDescription("Aşağıdaki kişiler sunucudan yasaklanmıştır.");
        embed.addField("Yasaklananlar:", (yeniListe.length > 0 ? yeniListe.map(p => p.Kisi + " | " + p.Sebep) : "Herhangi bir sonuç bulunamadı."))
        embed.setFooter("Geliştirici Alosha#1089, Sayfa: " + alosha.Page)
        await alosha.Mesaj.edit(embed);
      }
      if (react.emoji.name == "❌") {
        alosha.Mesaj.delete(1000);
        return delete client.banBilgilendirme[react.message.id];
      }
      if (alosha.Aktif === true) return;
      Ayarlar.Emojiler.forEach(emojim => {
        if (react.emoji.name == emojim) {
          var index = Ayarlar.Emojiler.indexOf(emojim);
          var kişi = alosha.Aktif_Liste[index].Kisi;
          alosha.Aktif = true;
          alosha.Mesaj.channel.send(new RichEmbed()
            .setDescription("Bir seçenek seçtin seçeneğin `" + (index + 1) + "` numarasında bulunan " + kişi + " adlı kişi, bundan emin misin?")
            .setFooter("`Evet` ya da `Hayır` olarak cevap vermelisin.")).then(msg => msg.delete(7000));
          alosha.Mesaj.channel.awaitMessages(m => m.author.id == user.id, { max: 1, time: 10000, errors: ['time'] })
            .then(sonuc => {
              if (sonuc.size > 0) {
                var mesaj = sonuc.first();
                if (mesaj.content.toLowerCase() == "evet") {
                  alosha.Guild.unban(kişi.id, user.id + " tarafından kaldırıldı.");
                  alosha.Mesaj.delete(5000);
                  delete client.banBilgilendirme[react.message.id];
                  return alosha.Mesaj.channel.send(kişi + "'nin yasaklaması kaldırılması için `Evet` dedin ve yasaklaması kaldırıldı.");
                }
                else {
                  alosha.Mesaj.delete(1000);
                  alosha.Mesaj.channel.send("Mesaja `Hayır` dediğin için işlem iptal edildi.").then(msg => msg.delete(5000))
                  delete client.banBilgilendirme[react.message.id];
                }
              }
            }).catch(err => {
              console.log(err);
              alosha.Mesaj.channel.send("Bir hata ile karşılaşıldı! Bot geliştiricisine bildirin.");
              delete client.banBilgilendirme[react.message.id];
            })
        }
      })
    })
      if (!message.member.roles.some(r => Ayarlar.Bertaraf_Edilecek_Yetkiler.some(a => a == r.id)))
      return message.reply(" yetkin yetmiyor!");
    if (!client.banBilgilendirme)
      client.banBilgilendirme = {};
    var aloshaBans = await message.guild.fetchBans(true).then(ban => ban);
    var aloshaList = aloshaBans.map(ban => {
      return {
        Kisi: ban.user,
        Sebep: (ban.reason || "Sebep bulunamadı")
      };
    });
    var aloshaPageList = aloshaList.slice(0, aloshaList.length > 9 ? 9 : aloshaList.length);
    var aloshaWriteableList = aloshaPageList.map(c => "[" + (aloshaPageList.findIndex(d => d.Kisi == c.Kisi) + 1) + "]" + c.Kisi + " *(DAL)-->* " + c.Kisi.username + " | " + c.Sebep).join("\n");
    if (aloshaPageList.length <= 0)
      aloshaWriteableList = "Herhangi bir yasaklama bulunamadı.";
    var embed = new RichEmbed()
      .setTitle(message.guild.name)
      .setFooter(message.author.username, message.author.avatarURL || message.author.defaultAvatarURL)
      .setDescription("Panel hazırlanıyor...")
    message.channel.send(embed).then(async msg => {
      await msg.react("❌");
      await msg.react("◀️");
      await msg.react("▶️");
      for (var x in aloshaPageList) {
        await msg.react(Ayarlar.Emojiler[x]);
      }
      embed.setDescription("Aşağıdaki kişiler sunucudan yasaklanmıştır.")
      embed.addField("Yasaklananlar:", aloshaWriteableList)
      embed.setFooter("Geliştirici Alosha#1089, Sayfa: " + 1);
      await msg.edit(embed);
      client.banBilgilendirme[msg.id] = {
        Liste: aloshaList,
        Aktif_Liste: aloshaPageList,
        Page: 1,
        Cagiran_Kisi: message.author.id,
        Guild: message.guild,
        Mesaj: msg,
        Embed: embed,
        Aktif: false
      }
    })
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