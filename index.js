const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


const client = new Discord.Client({disableEveryone: true, fetchAllMembers: true});
client.commands = new Discord.Collection();
const bot = new Discord.Client();
const channeltos = client.channels;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.util = require('./util');
client.on('warn', err => console.warn('[WARNING]', err));

client.on('error', err => console.error('[ERROR]', err));

client.on('disconnect', () => {
    console.warn('Disconnected!')
    process.exit(0);
});

client.on('uncaughtException', (err) => {
    console.log('Uncaught Exception: ' + err)
    process.exit(1)
});




client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  });
  process.on('unhandledRejection', (reason, promise) => {
    console.log('[FATAL] Possibly Unhandled Rejection at: Promise ', promise, ' reason: ', reason.message);
});
 
                
client.on('message', async msg => {
    const devs = msg.author.id == '344305604053041163';
   const blacklist = msg.author.id == '428874613628600322'|| msg.author.id == '747742404857298954';
 if ((msg.author.bot)) return;
    if(blacklist) return;
//mod-mail
//chatbot 
    if (msg.content.startsWith(`<@${msg.client.user.id}>`) || msg.content.startsWith(`<@!${msg.client.user.id}>`)|| msg.content.includes(`aliz`) ) {
        client.util.handleTalk(msg);
    }
//chat bot end
 //const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someID'
else if(!msg.guild){
 
    client.util.handleTalk(msg);
   
}
    else if(msg.content.startsWith(prefix+"say"))
        {
      if(!devs)
          return;
	var suffix = msg.content.split(' ').slice(1).join(' ');
	 msg.channel.send(suffix);
	
 
	}
	else if(msg.content.startsWith(prefix+"setn"))
		{
    if (!devs){
        return
        }
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
    
});

client.login(token);
