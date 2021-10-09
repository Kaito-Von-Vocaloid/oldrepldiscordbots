module.exports = {
	name: 'ping',
	description: 'ping command',
	execute(message, Discord, client){
		const newEmbed = new Discord.MessageEmbed() //creates new embed
    .setColor(message.guild.me.displayHexColor) //displays the color of bot's highest role
    .setTitle('PONG! 🏓') //title part
    .addFields(
      {name: 'Latency', value: `${Date.now() - message.createdTimestamp}`},
      {name: 'API Latency', value: `${Math.round(client.ws.ping)}`}
      )
    .setFooter(`command used by ${message.author.tag}`)
    .setTimestamp();
    message.channel.send(newEmbed);
	}
}
