const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
  
  msg.channel.send("Sa");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sa',
  description: 'Seviye sisteminin sunucudaki liderlik tablosunu gĂ¶sterir.',
  usage: 'sa'
};