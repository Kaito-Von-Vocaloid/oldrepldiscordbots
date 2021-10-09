client.on('message', message => {
  if(message.content.startsWith(prefix + 'sayaç')){
    const lastNumber = message.content.substring(7);
    if(!isNaN(lastNumber)){
      const lastNumberNumbered = Number(lastNumber);
      if(lastNumberNumbered === 0){
        message.reply('lütfen bir ***sayı*** girin!')
      } else {
        const userCount = message.guild.memberCount;
        if(lastNumberNumbered > userCount){
          const finalNumber = (userCount - lastNumberNumbered)* -1;
          message.reply(`son ${finalNumber} kişi kaldı!`)
        } else {
          message.reply('bu üye sayısını zaten geçtiniz!')
        }
      }
    } else {
      message.reply('lütfen bir ***sayı*** girin!');
    }
  }
});
//the texts are türkish in this code
