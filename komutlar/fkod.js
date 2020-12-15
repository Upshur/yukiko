///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7

///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7

const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  
  if (!msg.member.roles.has("720982876652437554")) return msg.channel.send("Bu komutu sadece **<@720982876652437554>** kullanabilir!")
  
  if(msg.channel.id !== "720983517647077447") return msg.channel.send("Bu komutu sadece <#720983517647077447> kanalında **kullanabilirsin!**")
  
  let kodIsım = args[0]
  if(!kodIsım) return msg.channel.send("Bir kod ismi **belirt!**")
  
  let kodLink = args[1]
  if(!kodLink) return msg.channel.send("Bir kod linki **belirt!**")
  
  
  msg.guild.createChannel(kodIsım, {
    type: "text",
    parent: "720984432709861386"
  }).then(channel => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Maximus CODE - Kod Paylaşıldı")
    .addField("<a:ykm:788060504236490833> Yetkili Bilgileri", `<a:ykm:788060504236490833> Yetkili İsim \`${msg.author.tag}\` \n <a:ykm:788060504236490833> Yetkili ID \`${msg.author.id}\``)
    .addField("<a:ykm:788060504236490833> Kod Bilgileri", `<a:ykm:788060504236490833> Kod İsmi \`${kodIsım}\` \n<a:ykm:720992252184494091> Kod Kategorisi \`FynxScript\` `)
    .setColor("RED")
    
    msg.channel.send(`\`${kodIsım}\` adlı kod **paylaşıldı!**`)
    
 client.channels.get("781420843015208982").send(embed)
    
    
    const kod = new Discord.RichEmbed()
    .setAuthor(`"${kodIsım}" Adlı Kod Paylaşıldı!`)
    .addField("Kod Hakkında",`<a:ykm:788060504236490833> Yetkili İsim \`${msg.author.tag}\` \n<a:ykm:788060504236490833> Yetkili ID \`${msg.author.id}\` \n<a:ykm:788060504236490833> Kod Linki [Koda Fırla](${kodLink})`)
    .setTimestamp()
    .setColor("RED")
    channel.send(kod)
  
  })
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fkod', 'fkodpaylaş'],
    permLevel: 0
  };
  
exports.help = {
 name: 'normal-kod-paylaş',
 description: 'kod paylaşmaya yarar',
 usage: '!fkod <kod isim> <kod linki>'
};

///////<a:hype:720991905554497697>
//////////<a:elmas:720992252184494091>