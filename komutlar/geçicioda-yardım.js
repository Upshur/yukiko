const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.RichEmbed()
     .setAuthor("𝐑𝐚𝐧𝐠𝐞𝐫 𝐆 𝐁𝐎𝐓", client.user.avatarURL)
.setColor('BLUE')
.addField("__Geçici Oda ayarlamak__", '__**!geçici-oda-kurulum**__ 》 **Geçici Oda Sistemi Kurar.**\n Örnek: `-geçici-oda-kurulum`')
.setTimestamp()
.addField('__**Kurduktan Sonra**__',`
!geçici-odalar 》 Tüm Geçici Odalarınızı Gösterir. BAĞIMSIZ ID De Burdadır
!geçici-oda-düzenle BağımsızID 》 Oda Sistemini Düzenlemek Hakkında.

Geçici Oda Kurduktan Değiştirebileceğiniz Şeyler / Kategori - Oda Oluşturma Odası İsimleri Ve Yetkilerini Düzenleyebilirsiniz
Unutmayın Oluşturulan Geçici Odalar Oda Oluşturma Odasının Birer Kopyasıdır
Yani Ne Yetki Ayarlarsanız Aynısını Geçici Odalarada Aktarıcaktır.
`)
     .setFooter('© 𝐑𝐚𝐧𝐠𝐞𝐫 𝐆',client.user.avatarURL)

 message.channel.send(embed) 

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçicioda'],
  permLevel: 0
};

module.exports.help = {
  name: 'geçici-oda',
  description: '',
  usage: ''
};