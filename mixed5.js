client.on('message', message => {
	if(message.content.startsWith(prefix + 'emoji-')){
		const type = message.content.substring(prefix.length + 6);
		var emojiId = type.substring(3);
		if(emojiId.length === 19){
			var emojiId = type.substring(4);
			if(type.startsWith('png')){
				const newEmbed = new Discord.MessageEmbed()
				.setDescription('png')
				.setImage(`https://cdn.discordapp.com/emojis/${emojiId}.png?v=1`)
			  .setFooter(`${message.author.tag} tarafından kullanıldı(${message.author.id})`)
			  .setTimestamp();
			  
			  message.channel.send(newEmbed);
		  } else {
		    if(type.startsWith('gif')){
		    	const newEmbed = new Discord.MessageEmbed()
				  .setDescription('gif')
				  .setImage(`https://cdn.discordapp.com/emojis/${emojiId}.gif?v=1`)
			    .setFooter(`${message.author.tag} tarafından kullanıldı(${message.author.id})`)
			    .setTimestamp();
			  
			    message.channel.send(newEmbed);
		    } else {
			    message.reply('böyle bir dosya türü bulamadım; Kullanabileceğiniz dosya türleri: `png` ve `gif`');
		    }
		  }
		}
	}
});
//the texts in this code is türkish
