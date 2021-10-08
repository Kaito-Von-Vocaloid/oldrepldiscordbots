module.exports = {
  name: 'help',
  description: 'Need help?',
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#228AE6')
    .setTitle('Come to our discord server')
    .setURL('https://discord.gg/')
    .setDescription('prefix is v.')
    .addFields(
      {name: 'v.help', value: 'Help commands'},
      {name: 'v.clear', value: 'Clear texts'},
      {name: 'v.ban', value: 'Bans an user'},
      {name: 'v.kick', value: 'Kicks an user'},
      {name: 'v.invite', value: 'Sends the invite link of bot'},
      {name: 'v.play', value: 'Listen music from youtube'},
      {name: 'v.leave', value: 'Bot leaves from voice channel'},
      )
    .setImage('https://cdn.discordapp.com/attachments/')
    .setFooter('@-2021');
    
    message.channel.send(newEmbed);
  }
  
}
