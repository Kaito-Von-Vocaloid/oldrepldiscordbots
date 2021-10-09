module.exports = {
	name: 'special-link',
	description: 'get a special dc link with a bug',
	execute(message, Discord, commandName, args){
		const discordCatcher = commandName.substring(13, 32);
		if(discordCatcher.startsWith('https://discord.gg/')){
			const inviteLink = args[1].substring(5);
		  if(args[2].startsWith('discord.gg/')){
		  	message.author.send(`${args[2]}||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${inviteLink}`);
		  	message.reply("I send your invite on dm control it!(if this isn't worked that means this bug don't work on your discord version(usually it don't work on android))");
		  } else {
			  message.reply('please be sure to your discord link starts with `discord.gg/`');
		  }
		} else {
			message.reply('please be sure to your discord link name starts with `https://discord.gg/`');
		}
	}
}
