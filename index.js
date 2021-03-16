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


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    channeltos.get('820951906578595870').send(`\`\`\`js\nBot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.\`\`\``);
    client.user.setActivity(`a!help | dm for help`);
  });
  process.on('unhandledRejection', (reason, promise) => {
    console.log('[FATAL] Possibly Unhandled Rejection at: Promise ', promise, ' reason: ', reason.message);
});
 
                
client.on('message', async msg => {
    //const devs = msg.author.id == '344305604053041163';
   const user2 = client.users;
  var messagecon = msg.content.split(' ').slice(2).join(' ');
 if ((msg.author.bot)) return;
//mod-mail
if(!msg.guild){
    var dmuserid = msg.author.id ;
    var messageconn = msg.content;
    var imglink = msg.attachments.first();
    if(!imglink)
{
    const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setDescription(`dm message recevied \n\`user :\` ${msg.author.tag} \n\`message content :\` ${messageconn} \n\`user id :\`:${dmuserid} `)
            .setFooter(`a!ds \`user-id\` reply-message - replies to an user`)
            .setTimestamp()
    channeltos.get('820949663783583795').send(embed);
    channeltos.get('820951906578595870').send(`\`\`\`js\nmessage logged from ${msg.author.tag}'s dms\`\`\``);
console.log(msg.author.tag,messageconn)
}
else
{
    {
        const embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setDescription(`dm image recevied \n\`user :\` ${msg.author.tag} \n\`user id :\`:${dmuserid} `)
                .setImage(imglink.url)
                .setFooter(`a!ds \`user-id\` reply-message - replies to an user`)
                .setTimestamp()
        channeltos.get('820949663783583795').send(embed);
        channeltos.get('820951906578595870').send(`\`\`\`js\nimage logged from ${msg.author.tag}'s dms\`\`\``);
    console.log(msg.author.tag,messageconn)
    }
console.log(msg.author.tag,imglink.url)}
}
//dm logger end

else
//chatbot 
    if (msg.content.startsWith(`<@${msg.client.user.id}>`) || msg.content.startsWith(`<@!${msg.client.user.id}>`)) {
        client.util.handleTalk(msg);
    }
//chat bot end
else
 //const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someID'

if(msg.content.startsWith(prefix + "ds")){
    var suffix = msg.content.split(' ').slice(1);
    var usertoreply =suffix[0];
    //let member = msg.mentions.users.first();
    const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setDescription(messagecon)
    user2.get(usertoreply).send(embed);
        channeltos.get('820951906578595870').send(`\`\`\`js\nmessage : ${messagecon} \nsent to ${usertoreply}\`\`\``);
    console.log('message processed',usertoreply,messagecon)
}else

    //-- end
    //verify command
    if(msg.content.startsWith("!verify"))
    {
        var verchannel = msg.channel.id == "818503424844628015";
        if(!verchannel) return;
        var member = msg.member;
        let role = msg.guild.roles.find(r => r.id === "818503424772669511");
    
       try{
        await  member.addRole(role);
    }catch(error) {console.error(error);
        msg.reply('There was an error trying to execute that command!');}
    }
    //other commands
 if (!msg.content.startsWith(prefix))
 {return;}
    else
     {
        // if (guildbl) return;
     const args = msg.content.slice(prefix.length).split(/ +/);
     const commandName = args.shift().toLowerCase();
     const message =msg;
     const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
     if (!command) return;
     try {
         command.execute(msg,args,client,message);
     }
     catch (error) {
         console.error(error);
         msg.reply('There was an error trying to execute that command!');
     }
   }
    
});

client.login(token);
