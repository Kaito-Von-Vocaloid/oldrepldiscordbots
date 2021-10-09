const ms = require('ms');
module.exports = {
  name: 'mute',
  description: 'mute users',
  execute(message, args, Discord) {
    const target = message.mentions.users.first();
    if(target) {
      let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
      
      let memberTarget = message.guild.members.cache.get(target.id);
      
      if(!args[1]) {
        if(message.member.permissions.has("MANAGE_ROLES")) {
        memberTarget.roles.add(muteRole.id);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle(`<@${memberTarget.user.id}> has been muted`)
        .setFooter('@-2021');
      
        message.channel.send(newEmbed);
        return
        } else {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle(`You do not have permission to mute`)
        .setFooter('@-2021');
      
        message.channel.send(newEmbed);
        }
      }
      if(message.member.permissions.has("MANAGE_ROLES")) {
      memberTarget.roles.add(muteRole.id);
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
      } else {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle(`You do not have permission to mute`)
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
      }
      
      setTimeout(function() {
        memberTarget.roles.remove(muteRole.id)
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle(`Mute time is over for <@${memberTarget.user.id}>`)
        .setFooter('@-2021');
      
        message.channel.send(newEmbed);
      }, ms(args[1]));
      } else {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle(`Cannot find that member`)
        .setFooter('@-2021');
      
        message.channel.send(newEmbed);
      }
    }
  }
