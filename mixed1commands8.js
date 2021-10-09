module.exports = {
  name: 'reactionrole',
  description: 'get roles with reacts',
  async execute(message, args, Discord, client) {
    const channel = '';
    const codeWriter = message.guild.roles.cache.find(role => role.name === "CodeWriter")
    const gameMaker = message.guild.roles.cache.find(role => role.name === "GameMaker")
    
    const codeWriterEmoji = '⌨️';
    const gameMakerEmoji = '🎮';
    
    let embed = new Discord.MessageEmbed()
        .setColor('#228AE6')
        .setTitle('Press emoji to get your role')
        .setFooter('@-2021');
        
    let embedMessage = await message.channel.send(embed);
    embedMessage.react(codeWriterEmoji);
    embedMessage.react(gameMakerEmoji);
    
    client.on('messageReactionAdd', async(reaction, user) => {
      if(reaction.message.partials) await reaction.message.fetch();
      if(reaction.partials) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      
      if(reaction.message.channel.id == channel) {
        if(reaction.emoji.name === codeWriterEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(codeWriter);
        }
        if(reaction.emoji.name === gameMakerEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(gameMaker);
        }
      } else {
        return;
      }
    });
    client.on('messageReactionRemove', async(reaction, user) => {
      if(reaction.message.partials) await reaction.message.fetch();
      if(reaction.partials) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      
      if(reaction.message.channel.id == channel) {
        if(reaction.emoji.name === codeWriterEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(codeWriter);
        }
        if(reaction.emoji.name === gameMakerEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(gameMaker);
        }
      } else {
        return;
      }
    });
  }
}
