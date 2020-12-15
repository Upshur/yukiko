const Discord = require('discord.js');
const client = new Discord.Client();
//ONLY CODE
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':x: Bu komut özel mesajlarda kullanıma kapatılmıştır.')
  return message.author.sendEmbed(ozelmesajuyari); }
//ONLY CODE
  let guild = message.guild
  let sebep = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (sebep.length < 1) return message.channel.send('Yasaklama sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.channel.send('Kimi banlayacağını yazmalısın.').catch(console.error);
//ONLY CODE
  if (!message.guild.member(user).bannable) return message.channel.send('Banlamaya çalıştığın kullanıcının benden yüksek yetkisi var, lütfen yetkimi yükselt ve tekrar dene.');
  message.guild.ban(user, 2);
  return message.channel.send(`${user.username}#${user.discriminator} adlı kullanıcıyı ${sebep} sebebiyle sunucudan yasakladın!`);
  user.send(`${guild.name} sunucusunda ${sebep} nedeniyle sunucudan yasaklandın!`)
};
//ONLY CODE
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban', 'banla', 'yasakat'],
  permLevel: 0
};
//ONLY CODE
exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'yasakla [kullanıcı] [sebep]'
};