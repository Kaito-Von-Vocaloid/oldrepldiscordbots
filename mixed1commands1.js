module.exports = {
  name: 'ban',
  description: 'ban users',
  execute(message, args, Discord){
    const member = message.mentions.users.first();
    if(member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      if (message.content === 'v.ban <@821037265756094464>') {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle('You cannot ban bot')
        .setFooter('@-2021');
    
        message.channel.send(newEmbed);
    } else {
      memberTarger.ban();
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle('User banned out')
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
    }
    }else{
      if(message.member.permissions.has("BAN_MEMBERS")){
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle('This is not an user')
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
      }else{
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle('You do not have permission to ban users')
        .setFooter('@-2021');
        
        message.channel.send(newEmbed);
      }
    }
  }
}
