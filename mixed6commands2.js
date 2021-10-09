module.exports = {
	name: 'set-prefix',
	description: 'set your prefix for server',
	execute(message, Discord, commandName, db){
		if(message.member.permissions.has("MANAGE_GUILD")){
			const prefix_catcher = commandName.substring(10);
			if(prefix_catcher.length <= 5){
				db.set("prefix", `${prefix_catcher}`);
				const newEmbed = new Discord.MessageEmbed()
				.setColor(message.guild.me.displayHexColor)
				.setTitle(`Server's new prefix is ***${prefix_catcher}***!`)
				.setFooter(`command used by ${message.author.tag}`)
				.setTimestamp();
				
				message.channel.send(newEmbed);
			} else {
				message.reply('prefix cannot be longer than 5 character');
			}
		}
	}
}
