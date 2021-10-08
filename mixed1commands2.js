module.exports = {
  name: 'clear',
  description: 'Clear messages',
  async execute(message, args, Discord) {
    if(!args[0]) {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle('Enter the number of messages to be deleted')
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
    }
    if(isNaN(args[0])) {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle('Enter an acceptable value')
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
    }
    if(args[0] > 100) {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle('You cannot delete more than 100 messages')
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
    }
    if(args[0] < 1) {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle('You must delete at least 1 message')
      .setFooter('@-2021');
      
      message.channel.send(newEmbed);
    }
    if(message.member.permissions.has("MANAGE_MESSAGES")) {
    await message.channel.bulkDelete(args[0]);
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#228AE6')
    .setTitle(`${args[0]} messages in total have been deleted`)
    .setFooter('@-2021');
    
    message.channel.send(newEmbed).then(message =>
    message.delete({timeout: 3000}));
    } else {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#228AE6')
      .setTitle(`You do not have permission to clear messages`)
      .setFooter('@-2021');
    
      message.channel.send(newEmbed)
    }
    }
  }
