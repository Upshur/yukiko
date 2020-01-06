const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Düzenlenecek**")
        .setColor("RANDOM")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'denememsj',
  description: 'Serverin iconunu gösterir',
  usage: 'denememsj'
};
