const asreaperDiscord = require('discord.js');
const asreaperClient = new asreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const asreaperEmbed = new asreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Çekiliş Sistemi Yardım Menüsü`)
 .setDescription(`
 **${Prefix}çekiliş** \n-> Çekiliş başlatır.
 **${Prefix}reroll** \n-> Çekilişi yeniden çeker.
 **${Prefix}çekilişbitir** \n-> Çekilişi bitirir.
`)
 .setFooter(`Asreaper Bot`)
 .setTimestamp()
 message.channel.send(asreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'çekilişsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};