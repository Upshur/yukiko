const Discord = require('discord.js');
const asreaper = require('./ayarlar.json');
const bot = new Discord.Client()
const westra = new Discord.ShardingManager('./asreaper.js', {
    totalShards: 1,
    token: asreaper.token
});

asreaper.spawn(); 

asreaper.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    asreaper.broadcastEval("process.exit()");
}, 21600000);