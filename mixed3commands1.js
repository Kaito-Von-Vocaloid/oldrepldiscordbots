module.exports = {
  name: 'login',
  description: 'üyeleri kayıt edin',
  async execute(message, args, Discord, client){
    const newRole = message.guild.roles.cache.find(role => role.name === "Kayıtsız");
    if(newRole){
      const member = message.mentions.users.first();
      if(member){
        const memberTarget = message.guild.members.cache.get(member.id);
        if(memberTarget.roles.cache.has(newRole.id)){
          const memberTag = await client.users.fetch(memberTarget.id);
          const moderatorTag = await client.users.fetch(message.member.id);
          const newName = message.content.substring(30);
          if(newName){
            memberTarget.setNickname(newName);
            memberTarget.roles.remove(newRole.id);
            const newEmbed = new Discord.MessageEmbed()
            .setTitle(`${memberTag.tag} adlı kullanıcı başarıyla kayıt edildi!`)
            .setDescription(`Yeni isim: ${newName}`)
            .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835286406129123368/image0.jpg')
            .setFooter(`Moderatör: ${moderatorTag.tag}`);
            
            message.channel.send(newEmbed);
          } else {
            const newEmbed = new Discord.MessageEmbed()
            .setTitle('Lütfen bir isim belirtin!')
            .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
            
            message.channel.send(newEmbed);
          }
        } else {
          const newEmbed = new Discord.MessageEmbed()
          .setTitle('Bu üye zaten kayıt edilmiş!')
          .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
        
          message.channel.send(newEmbed);
        }
      } else {
        if(isNaN(args[0])){
          const check1 = args[0].substring(18);
          if(check1 = ' '){
            const check2 = args[0].substring(17);
            if(check2 = ' '){
              const newEmbed = new Discord.MessageEmbed()
             .setTitle('Lütfen birini etiketleyin veya id belirtin')
             .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
      
             message.channel.send(newEmbed);
            } else {
              const human = message.guild.members.cache.get(args[0]);
              try {
                human.roles.add(newRole);
              }
              catch(err){
                const newEmbed = new Discord.MessageEmbed()
                .setTitle('Bu idye sahip ve bu sunucuda olan bir kullanıcı bulunmuyor!')
                .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
      
                message.channel.send(newEmbed);
              } else {
                const memberTarget = message.guild.members.cache.get(member.id);
                if(memberTarget.roles.cache.has(newRole.id)){
                  const memberTag = await client.users.fetch(memberTarget.id);
                  const moderatorTag = await client.users.fetch(message.member.id);
                  const newName = message.content.substring(30);
                  if(newName){
                    memberTarget.setNickname(newName);
                    memberTarget.roles.remove(newRole.id);
                    const newEmbed = new Discord.MessageEmbed()
                    .setTitle(`${memberTag.tag} adlı kullanıcı başarıyla kayıt edildi!`)
                    .setDescription(`Yeni isim: ${newName}`)
                    .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835286406129123368/image0.jpg')
                    .setFooter(`Moderatör: ${moderatorTag.tag}`);
            
                    message.channel.send(newEmbed);
                  } else {
                    const newEmbed = new Discord.MessageEmbed()
                    .setTitle('Lütfen bir isim belirtin!')
                    .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
            
                    message.channel.send(newEmbed);
                  }
                } else {
                  const newEmbed = new Discord.MessageEmbed()
                  .setTitle('Bu üye zaten kayıt edilmiş!')
                  .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
        
                  message.channel.send(newEmbed);
                }
              }
            }
          } else {
            const newEmbed = new Discord.MessageEmbed()
            .setTitle('Lütfen birini etiketleyin veya id belirtin')
            .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
      
            message.channel.send(newEmbed);
          }
        } else {
          const newEmbed = new Discord.MessageEmbed()
          .setTitle('Lütfen birini etiketleyin veya id belirtin!')
          .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
      
          message.channel.send(newEmbed);
        }
      }
   } else {
     const newEmbed = new Discord.MessageEmbed()
     .setTitle('Kayıtsız rolü bulunamadı!')
     .setImage('https://cdn.discordapp.com/attachments/827290778312638465/835276127525666856/image0.jpg');
     
     message.channel.send(newEmbed);
   }
  }
}
