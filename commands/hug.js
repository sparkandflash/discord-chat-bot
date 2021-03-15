module.exports = {
	name: 'hug',
	type: 'fun',
	 aliases: ['hugs'],
	description: 'not devs only',
execute(msg) {
    const Discord = require('discord.js');
    var usertohug = msg.mentions.users.first();
    //msg.channel.send(`${user} kisses ${usertokiss}\n https://tenor.com/view/kiss-anime-love-gif-4958649`);
    //https://tenor.com/view/kiss-anime-love-gif-4958649
    const Embed = new Discord.RichEmbed().setColor('#06cef1')
    Embed.setTitle(msg.author.tag+ ` hugs `+usertohug.tag)
    Embed.setImage(`https://cdn.discordapp.com/attachments/801147709225435166/814735323178336266/unknown.gif`) 
    msg.channel.send(Embed);
}
};