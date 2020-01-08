const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "411411280084074507") return message.reply('Bunu Sadece Sahibim Kullanabilir');
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Uyarı Sebebini Yazınız **uyar [kullanıcı] [sebep]**.');
  if (message.mentions.users.size < 1) return message.reply('Uyarmak İstedğiniz Kişiyi Yazınızı **uyar [kullanıcı] [sebep]**').catch(console.error);
  message.delete();
  message.reply('Kullanıcı Uyarıldı Ve Uyarılma Sebebi Özelden Gönderildi :white_check_mark: ')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Yetkili Tarafından Uyarıldın :warning:**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uyar'],
  permlevel: 4
};

exports.help = {
  name: 'uyar',
  description: 'Özelden Uyar.',
  usage: 'mesajat'
};