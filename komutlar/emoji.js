const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message) => {
    message.delete()
const emoji = client.emojis.get('706431800540659723');
message.channel.send(`<@${message.author.id}> Şu Emojiyi Attırdı -> ${emoji}`);
                     
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