module.exports = {
    name: 'rules',
    type: 'info',
    description: 'List of server rules',
    aliases: ['r', 'laws'],
    cooldown: 0,

	async execute(message, args) {
        const Discord = require('discord.js');

	{

            const embed = new Discord.RichEmbed()
            .setColor('#ffd1dc')
            .setAuthor(`✧\`'- Aura™ 乁༼‿✿༽ㄏ`)
            .setDescription(`Founders - @Rimmy#5152 ; @skipper#1000 \n Aura is a semi-toxic community hoping to get all cultures and activities together, please read the following rules and verify yourself with \`-role verify\` <3\n 
            
            ☾︎ ʀᴜʟᴇs ☽︎ \n
            
            オーラ~ ❥︎ Excessive toxicity is not allowed\n

            オーラ~ ❥︎ Be a racist and you get ban\n
            
            オーラ~ ❥︎ No porn, gore, animal abuse content in any channel, this server is sfw.\n
            
            オーラ~ ❥︎ Take your argument to DMs, we don't want drama.\n
            
            オーラ~ ❥︎ Jokes are totally fine so if you are sensitive and get sad/mad at the least thing, this server ain't for you.\n
            
            オーラ ~ ❥︎ No doxxing or leaking someone's personal info.\n

            you can talk to me if you need company >-< im a chatbot too\n`)
            .setImage(`https://cdn.discordapp.com/attachments/821030556300083230/821030687389384726/dc32b9a137a66a500c61675d529319da.jpg`)
            .setFooter(`a!help for commands | made by skipper#1000`)
            .setTimestamp()

             message.channel.send({ embed });
		}

	
	}
}
