const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let LoZUser = message.guild.member(message.mentions.users.first());
  let cezaliRolu = ""; // CEZALI ROLÜNÜN ID
  let cezalilar = db.get(`cezalilar.${message.guild.id}`);  
  
};

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