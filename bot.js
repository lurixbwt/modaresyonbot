const { Client } = require("discord.js");
const BookmanDB = require("bookman");
const client = new Client();
const database = new BookmanDB("langData");
const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require("quick.db");
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

// DIL \\
client.on("message", message => {
	let langFile = returnLangFile(message.guild);
	if (message.content == "test") {
		message.channel.send(langFile["test_mesajı"]);
	}
	if (message.content == "deneme") {
		message.channel.send(langFile["deneme_başarılı"]);
	}
	if (message.content == "dil tr") {
		db.set(`lang.${message.guild.id}`, "tr");
		message.channel.send(langFile["dil_degisti"]);
	}
  if (message.content == "dil en") {
		db.set(`lang.${message.guild.id}`, "en");
		message.channel.send(langFile["dil_degisti"]);
	}

});

function returnLangFile(guild) {
  let dili;
  let dil = db.fetch(`teyit.${dili}`);  

  let lang = db.get(`lang.${guild.id}`) ;
  if (lang != "en" && lang != "tr") lang = "tr";
  switch (lang) {
    case "tr":
      return require("./lang/tr.json");
    case "en":
      return require("./lang/en.json");
  }
}
// DIL \\

// REKLAM \\
client.on("message", async  msg => {
 var i = await db.fetch(`reklam_${msg.guild.id}`)
    if (i == 'acik') {
       const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl",".ga","cf", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party"];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('no reklam').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  });
// REKLAM \\

// ARGO \\
client.on("message", async  msg => {
 var i = await db.fetch(`küfür_${msg.guild.id}`)
    if (i == 'acik') {
       const küfür = ["amk","piç"];
        if (küfür.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('no Küfür').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  });
// ARGO \\

// TAG \\
client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("™") && client.guilds.get("703377662743412786").members.get(yeni.id).roles.has("706438106399899689")) {
     client.guilds.get("703377662743412786").members.get(yeni.id).removeRole("706438106399899689")
     client.channels.get('706438740184268821').send(`:broken_heart: ${yeni}, ™ tagını çıkardı!`)
    }
     if(yeni.username.includes("™") && !client.guilds.get("703377662743412786").members.get(yeni.id).roles.has("706438106399899689")) {
      client.channels.get('706438740184268821').send(`:heart: ${yeni}, ™ tagını aldı!`)
      client.guilds.get("703377662743412786").members.get(yeni.id).addRole("706438106399899689")
     }
  }
  })
// TAG \\


// BOT OFFLINE KONTROL \\
client.on("ready", async () => {
  setInterval(() => {
    
          const resimler = ["https://i.pinimg.com/originals/e2/9a/28/e29a28e9c7f1b1fb28c8aadb921cd3e9.gif", "https://i.imgyukle.com/2018/05/14/n5ZIh.gif", "https://i.gifer.com/Tm0H.gif"]
        const resim = resimler[Math.floor(Math.random()*resimler.length)];
        message.channel.send(`<@${message.author.id}> Adlı Üye Avatar İstedi.`, {
          file: `${resim}`
        });
    
  client.channels.get("700351796706803762").send(`[KORUMA] Bot Durumu: Online`)
}, 300000)//milsaniye
})
// BOT OFFLINE KONTROL \\