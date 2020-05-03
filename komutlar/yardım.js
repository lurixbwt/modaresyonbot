const Discord = require('discord.js')
const hash = require('../hash.json')
exports.run = async (client ,message ) => {
  
  let guild = "668875487657066516"
  
 const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
  let count = 0;
  /////////////////////
   var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }
  
  

  ///////////////////////////
      var tag = message.guild.members.filter(member => member.user.username.includes("tag")).size.toString()
      if(tag) {
    tag = tag.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }
      
  
  
  /////////////////////////////////
   var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }
  
  
  
  
  //////////////////////////////    
    var üyesayısı = message.guild.memberCount.toString().replace(/ /g,"")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }
  

  
  //////////////////////////////////////
    var boost = message.guild.members.filter(r=>r.roles.has("boost rol ıd")).size.toString() 
  if(boost) {
    boost = boost.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }
      
  
  
  
 ////////////////////////////////////
    var kadin = message.guild.members.filter(r=>r.roles.has("kadın rol ıd")).size.toString() 
  if(kadin) {
    kadin = kadin.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }
 
/////////////////////////////////////////
  var erkek = message.guild.members.filter(r=>r.roles.has(" erkek rol ıd")).size.toString() 
  if(erkek) {
   erkek = erkek.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }

/////////////////
  var kayıtsız = message.guild.members.filter(r=>r.roles.has("kayıtsız rol ıd")).size.toString() 
  if(kayıtsız) {
    kayıtsız = kayıtsız.replace(/([0-9])/g, d => {
      return {
      "1": "<a:say1:671365292961693736>",
        "2": "<a:say2:671365295562293260>",
        "3": "<a:say3:671365294609924107>",
        "4": "<a:say4:671365292764692502>",
        "5": "<a:say5:671365293028671536>",
        "6": "<a:say6:671365294622507045>",
        "7": "<a:say7:671365293343506442>",
        "8": "<a:say8:671365295230681088>",
        "9": "<a:say9:671365296396828697>",
        "0": "<a:say0:671365294941274142>"}[d];
      })
    }

const eren = new Discord.RichEmbed()

.setDescription(`
**Kişi Sayısı** : **${üyesayısı.toString()}**
**Aktif Üye** : **${onlayn}**
**Sesli Üye** : **${sessayı}**

**Booster Üye** : **${boost}**
**Tagli Üye** : **${tag}**

**Kız Üye** : **${kadin}**
**Erkek Üye** : **${erkek}**

**Kayıtsız Uye** : **${kayıtsız}**
`)
.setImage('https://media.discordapp.net/attachments/687702400756482057/688178907266154577/Eventual_Gif.gif')
.setThumbnail(`https://media.discordapp.net/attachments/687702400756482057/688178907266154577/Eventual_Gif.gif`)
message.channel.send(eren)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sb',],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
};