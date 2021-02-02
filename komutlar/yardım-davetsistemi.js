const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
let gif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Davet Sistemi Yardım Menüsü`)
 .setDescription(`
 **c?rütbe-ekle @rol davet** \n-> Rütbe ekler.
 **c?rütbeler** \n-> Rütbeleri gösterir 1'den 10'a kadar.
 **c?rütbe-sıfırla** \n-> Rütbeyi sıfırlar.
 **c?davetleri-sıfırla** \n-> Davetleri sıfırlar.
 **c?top** \n-> Lider tablosunu gösterir.
 **c?davetlerim** \n-> Davetlerinizi gösterir.
 **c?bonus-ekle** \n-> Bonus ekler.
 **c?davet-kanal #kanal** \n-> Davet kanalını ayarlar.
 **c?davet-kanal-sıfırla** \n-> Davet kanalını sıfırlar.`)
 .setTimestamp()
 .setImage(gif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davetsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};