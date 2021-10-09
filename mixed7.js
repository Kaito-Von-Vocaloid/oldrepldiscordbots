const prefix = '!'; //you can change the prefix if you want

client.on('message', async message => {
	if(message.content.startsWith(prefix + 'avatar')){
		const mention = message.mentions.users.first();
		if(mention){
			try {
				const newEmbed = new Discord.MessageEmbed()
				.setColor(message.guild.me.displayHexColor)
				.setTitle(`Avatar of ${mention.tag}`)
				.setImage(mention.displayAvatarURL({dynamic : true}))
				.setFooter(`Used by ${message.author.tag}`)
				.setTimestamp();
					
				message.channel.send(newEmbed);
			}
			catch(err){
				const newEmbed = new Discord.MessageEmbed()
				.setColor('#ff0000')
				.setTitle('Something is wrong!')
				.setFooter(`Used by ${message.author.tag}`)
				.setTimestamp();
					
				message.channel.send(newEmbed);
			}
		} else {
			const idCatcher = message.content.substring(prefix.length + 6).replace(' ', '');
			if(idCatcher === ""){
				const newEmbed = new Discord.MessageEmbed()
				.setColor(message.guild.me.displayHexColor)
				.setTitle(`Avatar of ${message.author.tag}`)
				.setImage(message.author.displayAvatarURL({dynamic : true}))
				.setFooter(`Used by ${message.author.tag}`)
				.setTimestamp();
					
				message.channel.send(newEmbed);
			} else {
				try {
					const idMember = await client.users.fetch(idCatcher);
					const newEmbed = new Discord.MessageEmbed()
					.setColor(message.guild.me.displayHexColor)
					.setTitle(`Avatar of ${idMember.tag}`)
					.setImage(idMember.displayAvatarURL({dynamic : true}))
					.setFooter(`Used by ${message.author.tag}`)
					.setTimestamp();
					
					message.channel.send(newEmbed);
				}
				catch(err){
					const newEmbed = new Discord.MessageEmbed()
					.setColor('#ff0000')
					.setTitle('Something is wrong!')
					.setFooter(`Used by ${message.author.tag}`)
					.setTimestamp();
					
					message.channel.send(newEmbed);
				}
			}
		}
	}
});
