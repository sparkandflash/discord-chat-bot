
        module.exports = {
            name: 'urban',
            type: 'util',
		 aliases: ['ud'],
            description: 'shows urban meaning',
           async execute(msg,args) {
            
                const Discord = require('discord.js');
                const query = require('querystring').stringify({ term: args.join(' ') }) 
                const body = await require('node-fetch')('http://api.urbandictionary.com/v0/define?'+query).then(res =>res.json())
                if (!body.list[0]) return msg.channel.send('No results.')
                const answer = body.list[0]
                const embed = new Discord.RichEmbed()
                  .setColor('#00e7ff')
                  .setTitle(answer.word)
                  .setURL(answer.permalink)
                  .addField('Definition', answer.definition.substr(0, 1024))
                  .addField('Example', answer.example.substr(0, 1024))
                  .addField('Rating', `👍 ${answer.thumbs_up}  👎 ${answer.thumbs_down} `);
                  msg.channel.send(embed);
	}
};
