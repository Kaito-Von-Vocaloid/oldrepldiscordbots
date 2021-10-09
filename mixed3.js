const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'b.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}

const keepAlive = require('./server.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'kayıt') {
    if(message.member.hasPermission("MANAGE_ROLES")) {
      if(message.guild.me.hasPermission("MANAGE_ROLES")){
        if(message.guild.me.hasPermission("MANAGE_NICKNAMES")){
          client.commands.get('login').execute(message, args, Discord, client);
        } else {
          const newEmbed = new Discord.MessageEmbed()
          .setTitle('Bot gereken yetkilere sahip değil!')
          .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835341351569981464/image0.jpg')
          .setFooter('Gerekli izin: Kullanıcı Adlarını Yönet');
      
          message.channel.send(newEmbed);
        }
      } else {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Bot gereken yetkilere sahip değil!')
        .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835341351569981464/image0.jpg')
        .setFooter('Gerekli izin: Rolleri Yönet');
      
        message.channel.send(newEmbed);
      }
    } else {
      const newEmbed = new Discord.MessageEmbed()
      .setTitle('Gereken yetkilere sahip değilsiniz!')
      .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835341351569981464/image0.jpg')
      .setFooter('Gerekli izin: Rolleri Yönet');
      
      message.channel.send(newEmbed);
    }
  }
});

client.on('message', message => {
  if(message.content.startsWith('b.')) {
    const command = message.content.substring(2);
    if(command.startsWith('kayıt')) {
    } else {
      if(command === 'bilgi' || command === 'ping' || command === 'davet') {
      } else {
        if(message.content === 'b.') {
        } else {
          message.react('🔴');
        }
      }
    }
  }
});

client.on('message', message => {
  if(message.content === prefix + 'ping') {
    const newEmbed = new Discord.MessageEmbed()
    .setTitle(`Ping: ${Date.now() - message.createdTimestamp}ms`)
    .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835287830262448170/image0.jpg');
    
    message.channel.send(newEmbed);
  }
});

client.on('message', message => {
  if(message.content === prefix + 'bilgi') {
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Bot hakkında bazı bilgiler:')
    .addFields(
      {name: 'Yapımcısı', value: '#'},
      {name: 'Kodlama kütüphanesi', value: 'discord.js'},
      {name: 'Kodlama platformu', value: 'repl.it'},
      {name: 'Yardımcı kaynaklar', value: 'https://tr.pinterest.com/urunami26/discord-emotes/'},
      )
    .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835288473614942258/image0.jpg');
    
    message.channel.send(newEmbed);
  }
});

client.on('message', message => {
  if(message.content === prefix + 'davet') {
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Click here to invite bot!')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=&permissions=&scope=bot');
    
    message.channel.send(newEmbed);
  }
});

keepAlive();
client.login(process.env.DISCORD_TOKEN);
