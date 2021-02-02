const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
let gif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
<a:cryptobyzsyhtik:769976055715856384> **${prefix}mod-log #kanal** \n-> Mod-log ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}küfürengel** \n-> Küfür engel açar/kapatır.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}reklamengel** \n-> Reklam engel açar/kapatır.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}reklamlog #kanal** \n-> Reklam-log ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}sa-as aç** \n-> SA-AS sistemini açar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}sa-as kapat** \n-> SA-AS sistemini kapatır.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}say** \n-> Sunucu bilgilerini gösterir.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}oylama** \n-> Oylama yapar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}otorol-sıfırla** \n-> Otorol sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${prefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`)
 .setTimestamp()
 .setImage(gif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};