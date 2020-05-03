const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message) => {
    message.delete()
const emoji = client.emojis.get('702138649151668284');
message.channel.send(`${emoji}`);
                     
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji'],
};

exports.help = {
  name: 'emoji',
  description: 'Emoji Paylaşır.',
  usage: 'emoji'
};