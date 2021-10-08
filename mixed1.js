const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MEMBER", "CHANNEL", "REACTION"]});

const token = process.env.DISCORD_TOKEN;

const prefix = 'v.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}

client.once('ready', () =>{
  console.log(' is activated!');
client.user.setActivity('Need help? Use v.help', { type: 'PLAYING' });
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'help') {
    client.commands.get('help').execute(message, args, Discord);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'clear') {
    client.commands.get('clear').execute(message, args, Discord);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'kick') {
    client.commands.get('kick').execute(message, args, Discord, client);
  }
});


client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'ban') {
    client.commands.get('ban').execute(message, args, Discord);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'mute') {
    client.commands.get('mute').execute(message, args, Discord);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'unmute') {
    client.commands.get('unmute').execute(message, args, Discord);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'reactionrole') {
    client.commands.get('reactionrole').execute(message, args, Discord, client);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'play') {
    client.commands.get('play').execute(message, args, Discord);
  }
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'leave') {
    client.commands.get('leave').execute(message, args, Discord);
  }
});

client.on('message', message => {
  if (message.content === '<@>') {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#228AE6')
    .setTitle('Come to our discord server')
    .setURL('https://discord.gg/')
    .setDescription('Use v.help command if you need help')
    .setFooter('@-2021');
      
    message.channel.send(newEmbed);
  }
});

client.on('message', message => {
  if (message.content === 'v.invite') {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#228AE6')
    .setTitle('Click here to invite the bot')
    .setURL('https://discord.com/oauth2/authorize?client_id=&permissions=&scope=bot')
    .setFooter('@-2021');
    
    message.channel.send(newEmbed);
  }
});

client.on('guildMemberAdd', guildMember => {
  let welcomeRole = guildMember.roles.cache.find(role => role.name === 'member');
  let botRole = guildMember.roles.cache.find(role => role.name === 'bot');
  let welcomeChannel = bot.channels.find("name", "welcome")
  if (guildMember.user.bot) {
  guildMember.roles.add(botRole);
  guildMember.guild.channels.cache.get(``).send(`Welcome to our server <@${guildMember.user.id}>`)
  } else {
  guildMember.roles.add(welcomeRole);
  welcomeChannel.send(`Welcome to server <@${guildMember.user.id}>`);
  }
});

client.on('message', message => {
  if (message.content === '<@> 😘') {
    message.channel.send('https://tenor.com/view/happy-anime-animation-love-cute-gif-12887287');
  }
});

client.on('message', message => {
  if(message.content === 'v.ping') {
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
  }
})

client.login(process.env.DISCORD_TOKEN);
