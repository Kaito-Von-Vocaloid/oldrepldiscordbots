const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'e!';

const multipleStatus = [
  `${prefix}help for help`,
  `${prefix}ping for see bot's ping`,
  `running on ${client.guilds.cache.size} servers`
  ];
  
const Database = require("@replit/database");

const db = new Database();

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}

client.on('ready', () => {
  console.log('--------------------------');
  console.log('-Discord bot run operation');
  console.log(`-Bot's name: ${client.user.username}`);
  console.log(`-Bot's tag: ${client.user.discriminator}`);
  console.log(`-Bot's prefix(main prefix): ${prefix}`);
  console.log(`-Total servers: ${client.guilds.cache.size}`);
  console.log(`-Commands: ${client.commands.size}`);
  console.log('--------------------------');
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (multipleStatus.length));
    const newActivity = multipleStatus[randomIndex];

    client.user.setPresence({
        status: "dnd",
        activity: {
            name: `${newActivity}`,
            type: "PLAYING"
        }
    });
  }, 5000);
});


client.on('message', message => {
	if(!message.author.bot){
			db.get("prefix").then(setedPrefix => {
		  if(setedPrefix){
			  const commandName = message.content.substring(setedPrefix.length);
			  if(commandName === 'ping'){
				  client.commands.get('ping').execute(message, Discord, client);
			  } else {
			  	if(commandName.startsWith('set-prefix')){
			  		client.commands.get('set-prefix').execute(message, Discord, commandName, db);
			  	} else {
			  		if(commandName.startsWith('special-link')){
			  			const args = message.content.slice(setedPrefix.length).split('-');
			  			client.commands.get('special-link').execute(message, Discord, commandName, args);
			  		}
			  	}
			  }
		  } else {
			  const commandName = message.content.substring(prefix.length);
			  if(commandName === 'ping'){
			  	client.commands.get('ping').execute(message, Discord, client);
			  } else {
			  	if(commandName.startsWith('set-prefix')){
			  		client.commands.get('set-prefix').execute(message, Discord, commandName, db);
			  	} else {
			  		if(commandName.startsWith('special-link')){
			  			const args = message.content.slice(prefix.length).split('-');
			  			client.commands.get('special-link').execute(message, Discord, commandName, args);
			  		}
			  	}
			  }
		  }
	  });
	}
});

client.login(process.env.TOKEN);
