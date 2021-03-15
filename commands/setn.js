module.exports = {
	name: 'setnick',
	type: 'owner',
	 aliases: ['setn'],
	description: 'devs only',
execute(msg) {
    if(!msg.member.hasPermission('ADMINISTRATOR'))
   { return message.reply("Sorry, you don't have permissions to use this!");}
    
        const newnick = msg.content.split(' ').slice(1).join(' ');
        try {
            
           msg.guild.me.setNickname(newnick);
        msg.channel.send('changing nick...');
            
        }
        catch(err)
         {
            msg.channel.send(`The following error occured \`\`\`js\n${err}\`\`\``);
            
        }
    
}
};