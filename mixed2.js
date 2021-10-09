const Discord = require('discord.js');

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN;

const prefix = 'c-';

const moment = require('moment');
client.on('message', message => {
  if(message.content.startsWith(prefix + 'user-info')){
    const mentionUser = message.mentions.users.first() || message.author;
     if (mentionUser) {
       const taggedUser = message.guild.member(mentionUser);
       if (taggedUser){
         const joinDiscord = moment(mentionUser.createdAt).format('llll');
         const joinServer = moment(mentionUser.joinedAt).format('llll');
         let newEmbed = new Discord.MessageEmbed()
         .setColor('#F85AD4')
         .setAuthor(mentionUser.username + '#' + mentionUser.discriminator, mentionUser.displayAvatarURL)
         .setDescription(`${taggedUser}`)
         .setThumbnail('https://cdn.discordapp.com/avatars/' +mentionUser.id+ '/' +mentionUser.avatar+'.jpeg')
         .addField('Joined at:', `${moment.utc(mentionUser.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
         .addField('Created at:', `${moment.utc(mentionUser.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
         .addField('Status:', mentionUser.presence.status, true)
         .addField('Roles:', `<@&${taggedUser._roles.join('> <@&')}>`, true)
         .setFooter(`ID: ${taggedUser.id}`)
         .setTimestamp();
         
         message.channel.send(newEmbed);
       }
     }
  }
});
