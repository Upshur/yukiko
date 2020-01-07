const Discord = require('discord.js');

exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
})
      .then((collected) => {
   message.guild.createChannel('📜 | Önemli|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])

        
 message.guild.createChannel('「📕•kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | Önemli")));
 message.guild.createChannel('「📢•duyurular', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | Önemli")));
       message.guild.createChannel('「🤗gelen-giden', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | Önemli")));
             message.guild.createChannel('mod-log', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | Önemli")));
            message.guild.createChannel('📦•oylama', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | Önemli")));

       }) 
       .then((collected) => {
        message.guild.createChannel('💬 | SOHBET KANALLARI', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`💬•genel-sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "💬 | SOHBET KANALLARI")));
     message.guild.createChannel(`🤖•bot-komut`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "💬 | SOHBET KANALLARI")));
     message.guild.createChannel(`📷•foto-sohbet`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "💬 | SOHBET KANALLARI")));
     message.guild.createChannel(`🎨tasarım-sohbet`, 'text')

    message.guild.createChannel('🚀|  SESLİ SOHBET', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`💼yetkili-sohbet`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🚀|  SESLİ SOHBET")))
    .then(c => {
      });
  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "🚀|  SESLİ SOHBET|")))
  .then(c => {
    });
  message.guild.createChannel(`🎶°Müzik Sohbet`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "🚀|  SESLİ SOHBET|")))
  .then(c => {
    });
  message.guild.createChannel(`⚙°afk`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "🚀|  SESLİ SOHBET|")))
  .then(c => {
    });
})
});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucukur"],
  permLevel: 3
};

exports.help = {
  name: 'sunucu-kur',
  description: 'Sunucuya kanal ve katogori kurar.',
  usage: 'kurulum'
};