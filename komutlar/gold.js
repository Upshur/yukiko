const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

 
    const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("𝐑𝐚𝐧𝐠𝐞𝐫 𝐆", client.user.avatarURL)
.setColor("BLUE")
.setTitle("𝐑𝐚𝐧𝐠𝐞𝐫 𝐆 𝐁𝐎𝐓")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")
.setDescription("Hep bizimle daha ileriye!")
 .addField("Görünümüne düşkün müsün? O zaman bu tam sana göre!", "Bizlere destek olmak ve harika özellikler kazanmak için \`-p-menü\` yaz")
 .setFooter("© 𝐑𝐚𝐧𝐠𝐞𝐫 𝐆 𝐁𝐎𝐓", client.user.avatarURL)
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold"],
  permLevel: 0
};

module.exports.help = {
  name: "gold",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
