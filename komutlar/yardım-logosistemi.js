const asreaperDiscord = require('discord.js');
const asreaperClient = new asreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const asreaperEmbed = new asreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}arrow** \n-> Ok şeklinde logo yapar.
 **${prefix}gold** \n-> Altın şeklinde logo yapar.
 **${prefix}green** \n-> Yeşil şeklinde logo yapar.
 **${prefix}grafiti** \n-> Graffiti şeklinde logo yapar.
`)
 .setTimestamp()
 message.channel.send(asreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};