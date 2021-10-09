module.exports = {
  name: 'unmute',
  description: 'unmute users',
  execute(message, args, Discord) {
    const target = message.mentions.users.first();
    if(target) {
      let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
      
      let memberTarget = message.guild.members.cache.get(target.id);
      
      if(!args[1]) {
        if(message.member.permissions.has("MANAGE_ROLES")) {
        memberTarget.roles.remove(muteRole.id);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle(`<@${memberTarget.user.id}> has been unmuted`)
        .setFooter('@-2021');
      
        message.channel.send(newEmbed);
        } else {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle(`You do not have permission to unmute`)
        .setFooter('@-2021');
      
        message.channel.send(newEmbed);        
        }
      } else {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle(`Cannot find that member`)
        .setFooter('@-2021');
      
        message.channel.send(newEmbed);
      }
    }
  }
}
