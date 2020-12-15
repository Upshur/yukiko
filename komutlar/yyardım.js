const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "607613815797972992") return message.channel.send("sunucupatlıcak5dkya");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('sunucupatlıcak5dkya');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur'],
  permLevel: 3
};

exports.help = {
  name: 'patlat',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru'
};