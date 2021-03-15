module.exports = {
	name: 'kiss',
	type: 'fun',
	 aliases: ['kith'],
	description: 'not devs only',
execute(msg) {
    const Discord = require('discord.js');
    var usertokiss = msg.mentions.users.first();
    //msg.channel.send(`${user} kisses ${usertokiss}\n https://tenor.com/view/kiss-anime-love-gif-4958649`);
    //https://tenor.com/view/kiss-anime-love-gif-4958649
    const Embed = new Discord.RichEmbed().setColor('#06cef1')
    Embed.setTitle(msg.author.tag+ ` kisses `+usertokiss.tag)
    Embed.setImage(`https://cdn.discordapp.com/attachments/814551742754324512/814581759857524776/unknown.gif`) 
    msg.channel.send(Embed);
}
};