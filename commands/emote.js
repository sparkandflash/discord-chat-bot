const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'emote',
	type: 'info',
    usage: '[emoji]',
    aliases: ['emoji-info'],
    description: 'Get information about an emoji',
    guildOnly: true,
	
	async execute(message, args) {

        let content = args[0];
        const EMOJI_REGEX = /<:\w+:(\d{17,19})>/;
        if (EMOJI_REGEX.test(content)) [, content] = content.match(EMOJI_REGEX);

		if (!isNaN(content)) {
            emoji =  message.guild.emojis.get(content)
        } else {
            emoji =  message.guild.emojis.find(e => e.name === content)
        }

        const embed = new Discord.RichEmbed()

        if (emoji) {
            embed.setDescription(`Info about **${emoji.name}** (ID: ${emoji.id})`)
            embed.setThumbnail(emoji.url)
            embed.addField('❯ Info', `• Identifier: \`${emoji}\`` + '\n' +
                `• Creation Date: ${moment(emoji.createdAt).format('D-MM-YY, k:mm')}` + '\n' +
                `• URL: ${emoji.url}`)
            message.channel.send({embed})
        } else return;
        
	},
};