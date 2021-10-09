module.exports = {
  name: 'leave',
  description: 'Leaves from the voicechannel',
  async execute(message, args, Discord) {
    const voiceChannel = message.member.voice.channel;
    
    if(!voiceChannel) return message.channel.send('You must be in a voice channel')
    await voiceChannel.leave();
    await message.channel.send('Leaved from the voice channel :mute:')
  }
}
