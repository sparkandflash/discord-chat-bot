module.exports = {
    name: 'help',
    type: 'util',
    description: 'List all of my commands or info about a specific command',
    aliases: ['commands', 'list','h'],
    usage: '<command>',
    examples: ['help', 'help kick', 'help stats'],
    cooldown: 0,

	async execute(message, args) {
        const Discord = require('discord.js');
        const { commands } = message.client;
        const prefix = 'a!';

		if (!args.length) {

            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setAuthor('Command List')
            .setDescription(`To view details for a command, do \`${prefix}help <command>\``)
            .addField('Utility', commands.filter(t => t.type === 'util').map(c => `\u200b\`${c.name}\``).join(' '))
            .addField('Info', commands.filter(t => t.type === 'info').map(c => `\u200b\`${c.name}\``).join(' '))
            .addField('Moderation', commands.filter(t => t.type === 'mod').map(c => `\u200b\`${c.name}\``).join(' '))
	    .addField('Fun', commands.filter(t => t.type === 'fun').map(c => `\u200b\`${c.name}\``).join(' '))
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()

            return message.channel.send({ embed });
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) return;
        
        const embed = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle('Command info about :: ' + command.name)
        if (command.usage) embed.addField('Usage', `\`${prefix}${command.name} ${command.usage}\``, true)
        if (command.description) embed.addField(`Description`, command.description, true)
        if (command.aliases) embed.addField('Aliases', `\`${command.aliases.join('\n')}\``, true)
        if (command.example) embed.addField('Examples', `\`${command.example.join('\n')}\``, true)
        if (command.cooldown) embed.addField('Cooldown', `\`${command.cooldown} second(s)\``, true)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()

        return message.channel.send({ embed });
	}
}
