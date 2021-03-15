module.exports = {
    name: 'avatar',
	 aliases: ['av','pfp'],
    type: 'util',
	description: 'displays user avatar',
	execute(msg) {
        
            let member = msg.mentions.users.first();
            if (!member) {
                msg.channel.send( `${msg.author.displayAvatarURL}`);
            }
            else{
                msg.channel.send(`${member.displayAvatarURL}`);
            }
             
            
}
}
