module.exports = {
  name: 'kick',
  description: 'kick users',
  execute(message, args, Discord, client){
    const member = message.mentions.users.first();
    if(member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      if (message.content === 'v.kick <@821037265756094464>') {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle('You cannot kick bot')
        .setFooter('@-2021');
    
        message.channel.send(newEmbed);
    } else {
      if(message.member.permissions.has("KICK_MEMBERS")) {
        if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
          memberTarger.kick();
          const newEmbed = new Discord.MessageEmbed()
          .setColor('#228AE6')
          .setTitle('User kicked out')
          .setFooter('@-2021');
        
          message.channel.send(newEmbed);
        } else {
          const newEmbed = new Discord.MessageEmbed()
          .setColor('#228AE6')
          .setTitle('Bot cannot kick users because bot do not have permision to kick users')
          .setFooter('@-2021');
        
          message.channel.send(newEmbed);
        }
      } else {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle('You do not have permission to kick user')
        .setFooter('@-2021');
        
        message.channel.send(newEmbed);
      }
    }
    }else{
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle('I got some error')
      .setFooter('@-2021');
        
      message.channel.send(newEmbed);
  }
}
}
