const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("SepuLtura", client.user.avatarURL)
.setColor("BLUE")
.setTitle("SepuLturaBOT")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")
 .setDescription(`

**-yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`-küfüraç\`
Botu davet etmek için: \`-davet\`
`)
 .addField("-komutlar (13)", `
herkesin kullanabileceği standart komutlar;
\`botbilgi\`,\`davet\`,\`oyver\`,\`gold\`,\`sunucu-pp\`,\`profil\`,\`kredim\`,\`p-market\`,\`p-menü\`,\`puanım\`,\`ayarlar\`
`)
 .addField("-eğlence (9)", `
herkesin kullanabileceği eğlence komutları;
\`aşk\`,\`token\`,\`tokat\`
`)
 
 .addField("-moderasyon (13)", `
yetkililer için moderasyon komutları;
\`Küfür Aç\`,\`Reklam Aç\`,\`Link Engel Aç\`,\`Reklam Kick Aç\`,\`Reklam İsim Ban Aç\`,\`Otorol\`,\`Sayaç\`,\`Ban Koruma Sistemi\`,\`Duyuru\`,\`Oto Cevap\`,\`Mute Sistemi\`,\`Anti Raid Bot Sistemi\`
`)
 
 .addField("-moderasyon 2 (12)", `
yetkililer için moderasyon komutlarının 2. bölümü;
\`sil\`,\`reklam taraması\`,\`resimli hg bb\`,\`sunucu tanıt\`,\`oto bot silici\`,\`ultra sohbet temizleyici\`,\`yavaş mod\`,\`duyuru\`,\`tag sistemi\`,\`rol sistemi\`,\`geçici oda sistemi\`,\`kayıt sistemi\`
`)
 
 .addField("-koruma (5)", `
Sunucunuz İçin Koruma Sistemleri.
\`sağ tık ban koruması\`,\`kanal silme koruması\`,\`rol silme koruması\`,\`sunucuya bot sokma koruması\`,\`güvenlik odası\`
`)
 .setFooter("SepuLtura", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
