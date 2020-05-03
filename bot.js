const { Client } = require("discord.js");
const BookmanDB = require("bookman");
const db = require("quick.db");
const client = new Client();
const database = new BookmanDB("langData");

client.on("ready", () => {
    console.log(client.user.username);
});

client.on("message", message => {
	let langFile = returnLangFile(message.guild);
	if (message.content == "test") {
		message.channel.send(langFile["test_mesajı"]);
	}
	if (message.content == "deneme") {
		message.channel.send(langFile["deneme_başarılı"]);
	}
	if (message.content == "dil") {
    let guild;
		db.has(`lang.${guild.id}`) ? db.get(`lang.${guild.id}`) == "en" ? db.set(`lang.${guild.id}`, "tr") : db.set(`lang.${guild.id}`, "en") : db.set(`lang.${guild.id}`, "en");
		message.channel.send(langFile["dil_degisti"]);
	}

});

function returnLangFile(guild) {
  let lang = database.has(`lang.${guild.id}`)
    ? database.get(`lang.${guild.id}`)
    : "tr";
  if (lang != "en" && lang != "tr") lang = "tr";
  switch (lang) {
    case "tr":
      return require("./lang/tr.json");
    case "en":
      return require("./lang/en.json");
  }
}

client.login("NzAzMzc5MDEzODkyMTc3OTkx.Xq4ELg.o5ru3DW_iGvddtkngKr2Oqu8b-E");